import React from "react";
import { connect, useSelector } from "react-redux";

import { startRemoveCartItem } from "../../actions/cartAction";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRemove = (id) => {
    this.props.dispatch(startRemoveCartItem(id));
  };

  renderCart = () => {
    console.log(this.props.cart);

    let cartValue = this.props.cart.map((ele) => {
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
                  <br />
                  <button
                    type="button"
                    class="btn btn-danger  btn-lg"
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

    return <div>{cartValue}</div>;
  };

  render() {
    let cartItem = this.props.cart;
    let value = cartItem.filter((ele) => {
      if (ele.userId == this.props.user._id) {
        return ele;
      }
    });

    return (
      <div className="container-fluid">
        <div className="contain1">
          <br />

          <h1>Cart</h1>

          {value.length == 0 ? (
            <h3>Your Cart Is Empty</h3>
          ) : (
            <div>
              <h3>Your Cart Has {value.length} items </h3>
              <div>{this.renderCart()}</div>
            </div>
          )}

          <div className="container-fluid ">
            <footer class="page-footer font-small blue">
              <div class="footer-copyright text-center py-3">
                <h5>Copyright © 2020 Taurus Coach|Developed by kitreek</h5>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Cart);
