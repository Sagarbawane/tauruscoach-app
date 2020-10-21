import axios from "../config/axios";
import Swal from "sweetalert2";

export const Cart = (cartItem) => {
  return { type: "ADD_TO_CART", payload: cartItem };
};

export const startGetCartItem = () => {
  console.log(localStorage.getItem("authToken"));
  return (dispatch) => {
    axios
      .get("/user/cart", {
        headers: {
          auth: localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const cartItem = response.data;
        dispatch(Cart(cartItem));
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: { err: "invalid Info" },
        });
      });
  };
};
export const startGetAddCartItem = (data) => {
  console.log(data);
  return (dispatch) => {
    axios
      .post("/user/cart", data, {
        headers: {
          auth: localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log("data", response.data);
        if (response.data.hasOwnProperty("errors")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.data.errors,
          });
        } else {
          if (response) {
            console.log(response);
            Swal.fire({
              title: "Are you sure?",
              icon: "success",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "ADD!",
            }).then((result) => {
              console.log(result);
              if (result.isConfirmed) {
                Swal.fire(
                  "Added!",
                  "Service has been added in cart.",
                  "success"
                );
                const cartItem = response.data;
                dispatch(Cart(cartItem));
              } else {
                Swal.fire(
                  "Cancelled",
                  "Service has not been  added in cart.",
                  "error"
                );
              }
            });
          }
        }
      })

      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      });
  };
};

export const RemoveCartItem = (_id) => {
  return { type: "REMOVE_CART_ITEM", payload: _id };
};
export const startRemoveCartItem = (id) => {
  return (dispatch) => {
    axios
      .delete(`/user/cart/${id}`, {
        headers: {
          auth: localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        if (response.data.hasOwnProperty("errors")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.data.errors,
          });
        } else {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!",
          }).then((result) => {
            if (!result.isConfirmed) {
              Swal.fire(
                "Cancelled",
                "The task has been not been removed.",
                "error"
              );
            } else {
              const cart = response.data;
              dispatch(RemoveCartItem(cart._id));
              Swal.fire("Removed!", "The task has been removed.", "success");
            }
          });
        }
      });
  };
};
