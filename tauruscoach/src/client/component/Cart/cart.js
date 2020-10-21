import React from "react";
import { connect } from "react-redux";
import { startRemoveCartItem } from "../../actions/cartAction";

let cartItems = [];
let count = 0;

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  cartItems = this.props.cart.filter((ele) => {
    if (ele.userId == this.props.user._id) {
      count++;
    }
    return count;
  });

  handleRemove = (id) => {
    this.props.dispatch(startRemoveCartItem(id));
  };

  renderCart = () => {
    if (this.props.cart) {
      console.log(this.props.cart);
      const cartValue = this.props.cart.map((ele) => {
        if (ele.userId === this.props.user._id) {
          console.log(ele.userId == this.props.user._id);
          return (
            <div className="container">
              <div class="card-deck">
                <div class="card custom-card w-75 p-3 border-warning mb-3 ">
                  <div class="card-header custom-header ">
                    <h5>Product Info</h5>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title text-info">
                      Service Name : {ele.serviceName}
                    </h4>
                    <h5 class="card-text text-info">
                      No Of Services : {ele.quantity}
                    </h5>

                    <h5 class="card-text text-info">Price : {ele.price}</h5>
                    <h5 class="card-text text-success ">
                      Created Time :{ele.createTime}
                    </h5>
                    <h5
                      class="card-text text-danger
                  
                  "
                    >
                      Expire Time : {ele.expireTime}
                    </h5>
                    <button
                      onClick={() => {
                        this.handleRemove(ele._id);
                      }}
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      });
      console.log(cartValue);

      return <div>{cartValue}</div>;
    }
  };

  render() {
    console.log(cartItems);
    console.log(count);
    return (
      <div className="container2">
        <div className="contain1">
          <h1>Cart</h1>

          {count == 0 ? (
            <h3>Your Cart Is Empty</h3>
          ) : (
            <h3>Your Cart Has {count} items </h3>
          )}

          {this.props.cart.map((ele) => {
            if (ele.userId == this.props.user._id) {
              return <div>{this.renderCart()}</div>;
            } else if (this.props.cart.length == 0) {
              return <h3>Your Cart Is Empty</h3>;
            }

            //   {
            //     this.props.cart.length == 0 ? (
            //       <h3>Your Cart Is Empty</h3>
            //     ) : (
            //       <div>{this.renderCart()}</div>
            //     );
            //   }
          })}
          <div className="container-fluid ">
            <div className="footer">
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              <h5>Copyright © 2020 Taurus Coach|Developed by kitreek</h5>
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    cart: state.cart,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Cart);
