import React from "react";

class Cart extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container2">
        <div className="contain1">
          <h1>Cart</h1>
          <h3>your cart is empty</h3>
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
export default Cart;
