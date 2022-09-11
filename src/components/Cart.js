import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryName from "./CategoryName";
import { addToCart, decreaseCart, increaseCart } from "../store/cartSlice";

class Cart extends Component {
  state = {
    initialImg: "",
  };
  render() {
    let color_index = 0;

    const changeImgRight = (Gallery, activeButton) => {
      color_index++;
      console.log(Gallery[color_index]);
      if (color_index >= Gallery.length) color_index = 0;
      if (activeButton === "40") {
        document.getElementById("40").setAttribute("src", Gallery[color_index]);
      } else if (activeButton === "41") {
        document.getElementById("41").setAttribute("src", Gallery[color_index]);
      } else if (activeButton === "42") {
        document.getElementById("42").setAttribute("src", Gallery[color_index]);
      } else if (activeButton === "43") {
        document.getElementById("43").setAttribute("src", Gallery[color_index]);
      } else if (activeButton === "S") {
        document.getElementById("S").setAttribute("src", Gallery[color_index]);
      } else if (activeButton === "M") {
        document.getElementById("M").setAttribute("src", Gallery[color_index]);
      } else if (activeButton === "L") {
        document.getElementById("L").setAttribute("src", Gallery[color_index]);
      } else if (activeButton === "XL") {
        document.getElementById("XL").setAttribute("src", Gallery[color_index]);
      }
    };

    let Jacket = 7;
    let nike = 5;
    const changeImgLeft = (Gallery, activeButton) => {
      //  Jacket = Gallery.length;
      Jacket--;
      nike--;
      console.log(Jacket);
      if (Jacket <= 0) Jacket = 6;
      if (nike <= 0) nike = 4;
      if (activeButton === "40") {
        document.getElementById("40").setAttribute("src", Gallery[nike]);
      } else if (activeButton === "41") {
        document.getElementById("41").setAttribute("src", Gallery[nike]);
      } else if (activeButton === "42") {
        document.getElementById("42").setAttribute("src", Gallery[nike]);
      } else if (activeButton === "43") {
        document.getElementById("43").setAttribute("src", Gallery[nike]);
      } else if (activeButton === "S") {
        document.getElementById("S").setAttribute("src", Gallery[Jacket]);
      } else if (activeButton === "M") {
        document.getElementById("M").setAttribute("src", Gallery[Jacket]);
      } else if (activeButton === "L") {
        document.getElementById("L").setAttribute("src", Gallery[Jacket]);
      } else if (activeButton === "XL") {
        document.getElementById("XL").setAttribute("src", Gallery[Jacket]);
      }
      console.log(Gallery[Jacket]);
    };

  

    console.log(this.props.cartData);

    return (
      <div>
        <CategoryName category="CART" />
        <hr style={{ width: 1180 }} />
        {this.props.cartData.length === 0 ? (
          <div className="cart-empty">
            <center>
              <h2>Your shopping cart is empty</h2>
            </center>
            <center>
              <p>
                <strong>
                  <a href="/">Click here</a>
                </strong>{" "}
                to continue shopping
              </p>
            </center>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div style={{ width: 1180 }}>
              {this.props.cartData.map((cartItem) => {
                return (
                  <div>
                    <div className="cartItems">
                      <div className="leftSide">
                        <h2>
                          {cartItem.Brand} {cartItem.Name}
                        </h2>

                        <h2>{cartItem.Price_ID}</h2>
                        <p>
                          {cartItem.symbol}
                          {cartItem.Prices}
                        </p>

                        {cartItem.Name === "Nike Air Huarache Le" ? (
                          <>
                            <h2>
                              <b>{cartItem.SIZE_ID}</b>
                            </h2>
                            <div className="btnGroup">
                              {cartItem.clotheSizes.map((btn) => {
                                return (
                                  <button
                                    style={{
                                      height: 45,
                                      width: 45,
                                      borderStyle: "solid",
                                      marginRight: 2,
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
                            <h2>
                              <b>{cartItem.SIZE_ID}</b>
                            </h2>
                            <div className="btnGroup">
                              {cartItem.clotheSizes.map((btn) => {
                                return (
                                  <button
                                    style={{
                                      height: 45,
                                      width: 45,
                                      borderStyle: "solid",
                                      marginRight: 2,
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
                            <h2>
                              <b>{cartItem.Capacity}</b>
                            </h2>
                            <div className="btnGroup">
                              {cartItem.AllCapacity.map((btn) => {
                                return (
                                  <button
                                    style={{
                                      height: 45,
                                      width: 45,
                                      marginRight: 4,
                                      borderStyle: "solid",
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
                              <h2>
                                <b>{cartItem.WithUSB}</b>
                              </h2>
                              <div className="btnGroup">
                                {cartItem.Ports.map((btn) => {
                                  return (
                                    <button
                                      style={{
                                        height: 45,
                                        width: 45,
                                        marginRight: 4,
                                        borderStyle: "solid",
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
                              <h2>
                                <b>{cartItem.Touch_ID}</b>
                              </h2>
                              <div className="btnGroup">
                                {cartItem.Ports.map((btn) => {
                                  return (
                                    <button
                                      style={{
                                        height: 45,
                                        width: 45,
                                        marginRight: 4,
                                        borderStyle: "solid",
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
                            <h2>
                              <b>{cartItem.Capacity}</b>
                            </h2>
                            <div className="btnGroup">
                              {cartItem.AllCapacity.map((btn) => {
                                return (
                                  <button
                                    style={{
                                      height: 45,
                                      width: 45,
                                      marginRight: 4,
                                      borderStyle: "solid",
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
                            <h2>
                              <b>{cartItem.Color}</b>
                            </h2>
                            <div className="btnGroup">
                              {cartItem.swatchColor.map((btn) => {
                                return (
                                  <button
                                    style={{
                                      height: 40,
                                      width: 40,
                                      marginRight: 4,
                                      backgroundColor: btn.value,
                                      borderStyle: "solid",
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

                      <div className="rightSide">
                        <div className="btnQty">
                          <button
                            style={{
                              cursor: "pointer",
                              height: 45,
                              width: 45,
                              marginBottom: 28,
                              borderStyle: "solid",
                              borderColor: "black",
                              background: "inherit",
                              borderWidth: 1,
                            }}
                            onClick={() => this.props.increaseCart(cartItem)}
                          >
                            +
                          </button>
                          <p style={{ marginLeft: 15 }}>
                            {cartItem.cartQuantity}
                          </p>
                          <button
                            style={{
                              cursor: "pointer",
                              height: 45,
                              width: 45,
                              marginTop: 31,
                              borderStyle: "solid",
                              borderColor: "black",
                              background: "inherit",
                              borderWidth: 1,
                            }}
                            onClick={() => this.props.decreaseCart(cartItem)}
                          >
                            -
                          </button>
                        </div>
                        <div>
                          <img
                            id={cartItem.activeButton}
                            style={{ height: 200, width: 200 }}
                            src={cartItem.Gallery[0]}
                            alt={cartItem.Brand}
                          />
                          {cartItem.Gallery.length > 1 ? (
                            <div>
                              <svg
                                onClick={() =>
                                  changeImgLeft(
                                    cartItem.Gallery,
                                    cartItem.activeButton
                                  )
                                }
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="24"
                                  height="24"
                                  fill="black"
                                  fill-opacity="0.73"
                                />
                                <path
                                  d="M14.25 6.06857L8.625 11.6876L14.25 17.3066"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <svg
                                onClick={() =>
                                  changeImgRight(
                                    cartItem.Gallery,
                                    cartItem.activeButton
                                  )
                                }
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="24"
                                  height="24"
                                  transform="matrix(-1 0 0 1 24 0)"
                                  fill="black"
                                  fill-opacity="0.73"
                                />
                                <path
                                  d="M9.75 6.06808L15.375 11.6871L9.75 17.3062"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </div>

                    <hr />
                  </div>
                );
              })}

              <div className="leftSide">
                <p>
                  Tax 21%: <strong>$42.00</strong>{" "}
                </p>
                <p>
                  Quantity: <strong>{this.props.cartTotalQty}</strong>{" "}
                </p>
                <p>
                  Total:{" "}
                  <strong>
                    {this.props.cartData[0].symbol} {this.props.cartTotalAmount}
                  </strong>
                </p>
                <button
                  className="add"
                  style={{ cursor: "pointer" }}
                  onClick={() => alert("Thank you for shopping with Scandiweb")}
                >
                  ORDER
                </button>
              </div>
            </div>
          </div>
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

const mapDispatchToProps = () => {
  return {
    decreaseCart,
    addToCart,
    increaseCart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Cart);
