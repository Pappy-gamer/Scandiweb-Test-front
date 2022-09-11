import React, { Component } from "react";
import { connect } from "react-redux";
import "./Modal.css";

class Modal extends Component {
  state = {
    popUp: false,
  };
  render() {
    const toggle = () => {
      console.log("cidj");
      this.setState({ popUp: !this.state.popUp });
    };
    return (
      <div>

        {this.state.popUp ? (
          <div className="modal">
            <div onClick={toggle} className="overlay">
              <div className="modal-content">
                <h2>My Bag: {this.props.cartTotalQty} item(s)</h2>
                {this.props.cartData.map((cartItem) => {
                  return (
                    <>
                      {cartItem.Name === "Nike Air Huarache Le" ? (
                        <>
                          <div className="cartItemsModal">
                            <div style={{ height: 2 }} className="leftSide">
                              <div className="leftSideModal">
                                <p>{cartItem.Brand}</p>
                                <p>{cartItem.Name}</p>
                                <p>{cartItem.Price_ID}:</p>
                                <p>
                                  {cartItem.symbol}
                                  {cartItem.Prices}
                                </p>
                                <p>
                                  <b>{cartItem.SIZE_ID}:</b>
                                </p>
                                <div className="btnGroup">
                                  {cartItem.clotheSizes.map((btn) => {
                                    return (
                                      <button
                                        style={{
                                          height: 30,
                                          width: 33,
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
                              </div>
                            </div>
                            <div
                              className="rightSide"
                              style={{ marginTop: 12 }}
                            >
                              <div className="btnQty" style={{ height: 190 }}>
                                <button
                                  style={{
                                    height: 28,
                                    width: 28,
                                    marginBottom: 28,
                                  }}
                                  onClick={() =>
                                    this.props.increaseCart(cartItem)
                                  }
                                >
                                  +
                                </button>
                                <p style={{ marginLeft: 15 }}>
                                  {cartItem.cartQuantity}
                                </p>
                                <button
                                  style={{
                                    height: 28,
                                    width: 28,
                                    marginTop: 48,
                                  }}
                                  onClick={() =>
                                    this.props.decreaseCart(cartItem)
                                  }
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
                        </>
                      ) : (
                        <></>
                      )}

                      {cartItem.Name === "Jacket" ? (
                        <>
                          <div className="cartItemsModal">
                            <div style={{ height: 2 }} className="leftSide">
                              <div className="leftSideModal">
                                <p>{cartItem.Brand}</p>
                                <p>{cartItem.Name}</p>
                                <p>{cartItem.Price_ID}:</p>
                                <p>
                                  {cartItem.symbol}
                                  {cartItem.Prices}
                                </p>
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
                              </div>
                            </div>
                            <div
                              className="rightSide"
                              style={{ marginTop: 12 }}
                            >
                              <div className="btnQty" style={{ height: 190 }}>
                                <button
                                  style={{
                                    height: 28,
                                    width: 28,
                                    marginBottom: 28,
                                  }}
                                  onClick={() =>
                                    this.props.increaseCart(cartItem)
                                  }
                                >
                                  +
                                </button>
                                <p style={{ marginLeft: 15 }}>
                                  {cartItem.cartQuantity}
                                </p>
                                <button
                                  style={{
                                    height: 28,
                                    width: 28,
                                    marginTop: 48,
                                  }}
                                  onClick={() =>
                                    this.props.decreaseCart(cartItem)
                                  }
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
                        </>
                      ) : (
                        <></>
                      )}

                      {cartItem.Name === "iMac 2021" ? (
                        <>
                          <div
                            style={{ marginBottom: 30 }}
                            className="cartItemsModal"
                          >
                            <div style={{ height: 2 }} className="leftSide">
                              <div
                                style={{ lineHeight: 0.4 }}
                                className="leftSideModal"
                              >
                                <p>{cartItem.Brand}</p>
                                <p>{cartItem.Name}</p>
                                <p>{cartItem.Price_ID}:</p>
                                <p>
                                  {cartItem.symbol}
                                  {cartItem.Prices}
                                </p>
                                <p>
                                  <b>{cartItem.Capacity}</b>
                                </p>
                                <div className="btnGroup">
                                  {cartItem.AllCapacity.map((btn) => {
                                    return (
                                      <button
                                        style={{
                                          fontSize: 10,
                                          height: 33,
                                          width: "auto",
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
                                            fontSize: 11,
                                            height: 33,
                                            width: 33,
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
                                  <div style={{}} className="btnGroup">
                                    {cartItem.Ports.map((btn) => {
                                      return (
                                        <button
                                          style={{
                                            fontSize: 11,
                                            height: 33,
                                            width: 33,
                                            marginRight: 4,
                                          }}
                                          className={
                                            btn.value ===
                                            cartItem.touchIDactiveBtn
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
                              </div>
                            </div>
                            <div
                              className="rightSide"
                              style={{ marginTop: 12 }}
                            >
                              <div className="btnQty" style={{ height: 190 }}>
                                <button
                                  style={{
                                    height: 28,
                                    width: 28,
                                    marginBottom: 28,
                                  }}
                                  onClick={() =>
                                    this.props.increaseCart(cartItem)
                                  }
                                >
                                  +
                                </button>
                                <p style={{ marginLeft: 15 }}>
                                  {cartItem.cartQuantity}
                                </p>
                                <button
                                  style={{
                                    height: 28,
                                    width: 28,
                                    marginTop: 48,
                                  }}
                                  onClick={() =>
                                    this.props.decreaseCart(cartItem)
                                  }
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
                        </>
                      ) : (
                        <></>
                      )}

                      {cartItem.Name === "iPhone 12 Pro" ? (
                        <>
                          <div className="cartItemsModal">
                            <div style={{ height: 2 }} className="leftSide">
                              <div className="leftSideModal">
                                <p>{cartItem.Brand}</p>
                                <p>{cartItem.Name}</p>
                                <p>{cartItem.Price_ID}:</p>
                                <p>
                                  {cartItem.symbol}
                                  {cartItem.Prices}
                                </p>
                                <p>
                                  <b>{cartItem.Capacity}</b>
                                </p>
                                <div className="btnGroup">
                                  {cartItem.AllCapacity.map((btn) => {
                                    return (
                                      <button
                                        style={{
                                          fontSize: 10,
                                          height: 33,
                                          width: 33,
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
                                          btn.value ===
                                          cartItem.colorActiveButton
                                            ? "swatchActiveBtn"
                                            : ""
                                        }
                                      ></button>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                            <div
                              className="rightSide"
                              style={{ marginTop: 12 }}
                            >
                              <div className="btnQty" style={{ height: 190 }}>
                                <button
                                  style={{
                                    height: 28,
                                    width: 28,
                                    marginBottom: 28,
                                  }}
                                  onClick={() =>
                                    this.props.increaseCart(cartItem)
                                  }
                                >
                                  +
                                </button>
                                <p style={{ marginLeft: 15 }}>
                                  {cartItem.cartQuantity}
                                </p>
                                <button
                                  style={{
                                    height: 28,
                                    width: 28,
                                    marginTop: 48,
                                  }}
                                  onClick={() =>
                                    this.props.decreaseCart(cartItem)
                                  }
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
                        </>
                      ) : (
                        <></>
                      )}

                      {cartItem.Name === "AirTag" ? (
                        <>
                          <div className="cartItemsModal">
                            <div style={{ height: 2 }} className="leftSide">
                              <div className="leftSideModal">
                                <p>{cartItem.Brand}</p>
                                <p>{cartItem.Name}</p>
                                <p>{cartItem.Price_ID}:</p>
                                <p>
                                  {cartItem.symbol}
                                  {cartItem.Prices}
                                </p>
                              </div>
                            </div>
                            <div
                              className="rightSide"
                              style={{ marginTop: 12 }}
                            >
                              <div className="btnQty" style={{ height: 190 }}>
                                <button
                                  style={{
                                    height: 28,
                                    width: 28,
                                    marginBottom: 28,
                                  }}
                                  onClick={() =>
                                    this.props.increaseCart(cartItem)
                                  }
                                >
                                  +
                                </button>
                                <p style={{ marginLeft: 15 }}>
                                  {cartItem.cartQuantity}
                                </p>
                                <button
                                  style={{
                                    height: 28,
                                    width: 28,
                                    marginTop: 48,
                                  }}
                                  onClick={() =>
                                    this.props.decreaseCart(cartItem)
                                  }
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
                        </>
                      ) : (
                        <></>
                      )}
                    </>

                    
                  );
                })}

                <div className="mini-Cart-Bottom-Btn" style={{ marginTop: 16 }}>
                  <h3 className="mini-cart-btns">Total:</h3>
                  <h3 className="mini-cart-btns">
                    ${this.props.cartTotalAmount}
                  </h3>
                </div>
                <div className="mini-Cart-Bottom-Btn">
                  <button
                    className="mini-cart-btns"
                    style={{ height: 46, width: 155 }}
                    onClick={() => alert("clicked")}
                  >
                    View bag
                  </button>
                  <button
                    className="mini-cart-btns"
                    style={{ height: 46, width: 155 }}
                  >
                    Clear bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
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

export default connect(mapStateToProps)(Modal);
