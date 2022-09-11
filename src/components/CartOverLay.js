import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, decreaseCart, increaseCart } from "../store/cartSlice";

class CartOverLay extends Component {
  render() {
    return (
      <div>
        <div className="modal-content">
          <h2>My Bag: {this.props.cartTotalQty} item(s)</h2>
          {this.props.cartData.map((cartItem) => {
            return (
              <div className="cartItems">
                <div style={{ height: 2 }} className="leftSide">
                  <div className="leftSideModal">
                    <p>{cartItem.Brand}</p>
                    <p>{cartItem.Name}</p>
                    <p>{cartItem.Price_ID}:</p>
                    <p>
                      {cartItem.symbol}
                      {cartItem.Prices}
                    </p>

                    {cartItem.Name === "Nike Air Huarache Le" ? (
                      <>
                        <p>
                          <b>{cartItem.SIZE_ID}:</b>
                        </p>
                        <div className="btnGroup">
                          {cartItem.clotheSizes.map((btn) => {
                            return (
                              <button
                                style={{
                                  height: 24,
                                  width: 24,
                                  marginRight: 5,
                                }}
                                className={
                                  btn.value === cartItem.activeButton
                                    ? "active"
                                    : ""
                                }
                              >
                                {btn.value}
                              </button>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {cartItem.Name === "Jacket" ? (
                      <>
                        <p>
                          <b>{cartItem.SIZE_ID}</b>
                        </p>
                        <div className="btnGroup">
                          {cartItem.clotheSizes.map((btn) => {
                            return (
                              <button
                                style={{
                                  height: 24,
                                  width: 24,
                                  marginRight: 5,
                                }}
                                className={
                                  btn.value === cartItem.activeButton
                                    ? "active"
                                    : ""
                                }
                              >
                                {btn.value}
                              </button>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {cartItem.Name === "iMac 2021" ? (
                      <>
                        <p>
                          <b>{cartItem.Capacity}</b>
                        </p>
                        <div className="btnGroup">
                          {cartItem.AllCapacity.map((btn) => {
                            return (
                              <button
                                style={{
                                  height: 24,
                                  width: 24,
                                  marginRight: 4,
                                }}
                                className={
                                  btn.value === cartItem.activeButton
                                    ? "active"
                                    : ""
                                }
                              >
                                {btn.value}
                              </button>
                            );
                          })}
                          <p>
                            <b>{cartItem.WithUSB}</b>
                          </p>
                          <div className="btnGroup">
                            {cartItem.Ports.map((btn) => {
                              return (
                                <button
                                  style={{
                                    height: 24,
                                    width: 24,
                                    marginRight: 4,
                                  }}
                                  className={
                                    btn.value === cartItem.portActiveBtn
                                      ? "active"
                                      : ""
                                  }
                                >
                                  {btn.value}
                                </button>
                              );
                            })}
                          </div>
                          <p>
                            <b>{cartItem.Touch_ID}</b>
                          </p>
                          <div className="btnGroup">
                            {cartItem.Ports.map((btn) => {
                              return (
                                <button
                                  style={{
                                    height: 24,
                                    width: 24,
                                    marginRight: 4,
                                  }}
                                  className={
                                    btn.value === cartItem.touchIDactiveBtn
                                      ? "active"
                                      : ""
                                  }
                                >
                                  {btn.value}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {cartItem.Name === "iPhone 12 Pro" ? (
                      <>
                        <p>
                          <b>{cartItem.Capacity}</b>
                        </p>
                        <div className="btnGroup">
                          {cartItem.AllCapacity.map((btn) => {
                            return (
                              <button
                                style={{
                                  fontSize: 11,
                                  height: 24,
                                  width: 24,
                                  marginRight: 4,
                                }}
                                className={
                                  btn.value === cartItem.activeButton
                                    ? "active"
                                    : ""
                                }
                              >
                                {btn.value}
                              </button>
                            );
                          })}
                        </div>
                        <p>
                          <b>{cartItem.Color}</b>
                        </p>
                        <div className="btnGroup">
                          {cartItem.swatchColor.map((btn) => {
                            return (
                              <button
                                style={{
                                  height: 24,
                                  width: 24,
                                  marginRight: 4,
                                  backgroundColor: btn.value,
                                }}
                                className={
                                  btn.value === cartItem.colorActiveButton
                                    ? "swatchActiveBtn"
                                    : ""
                                }
                              ></button>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div className="rightSide" style={{ marginTop: 12 }}>
                  <div className="btnQty" style={{ height: 190 }}>
                    <button
                      style={{ height: 28, width: 28, marginBottom: 28 }}
                      onClick={() => this.props.increaseCart(cartItem)}
                    >
                      +
                    </button>
                    <p style={{ marginLeft: 15 }}>{cartItem.cartQuantity}</p>
                    <button
                      style={{ height: 28, width: 28, marginTop: 48 }}
                      onClick={() => this.props.decreaseCart(cartItem)}
                    >
                      -
                    </button>
                  </div>
                  <img
                    style={{ height: 190, width: 132 }}
                    src={cartItem.Gallery[0]}
                    alt="pcoc"
                  />
                </div>
              </div>

              // </div>
            );
          })}

          <h3 style={{ marginTop: 49 }}>Total: {this.props.cartTotalAmount}</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartData: state.cart.cartItems,
    cartTotalQty: state.cart.cartTotalQuantity,
    cartTotalAmount: state.cart.cartTotalAmount,
  };
};

const mapDispatchToProps = () => {
  return {
    decreaseCart,
    addToCart,
    increaseCart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CartOverLay);
