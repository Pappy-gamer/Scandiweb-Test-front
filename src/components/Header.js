import React, { Component } from "react";
import { connect } from "react-redux";
import "./Modal/Modal.css";
import {
  clearBag,
  increaseCart,
  decreaseCart,
} from "../store/cartSlice";

class Header extends Component {
  state = {
    popUp: false,
    stuffs: [],
    Prices: [],
    activeLink: "",
  };
  componentDidMount() {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
      query{
  
        currencies{
          symbol
          label
        }
      }
      `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          Prices: data.data.currencies,
        });
      });
  }
  render() {
    const toggle = () => {
      this.setState({ popUp: !this.state.popUp });
    };

    if (this.state.popUp) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    return (
      <div>
        <header className="header1">
          <nav>
            <ul>
              <li>
                <a className="activeButton" href="/">
                  ALL
                </a>
              </li>
              <li>
                <a href="/tech">TECH</a>
              </li>
              <li>
                <a href="/clothes">CLOTHES</a>
              </li>
            </ul>

            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_150_357)">
                <path
                  d="M34.0222 28.6646C34.0494 28.983 33.8009 29.2566 33.4846 29.2566H7.46924C7.15373 29.2566 6.90553 28.9843 6.93156 28.6665L8.7959 5.91227C8.8191 5.62962 9.05287 5.41211 9.33372 5.41211H31.5426C31.8226 5.41211 32.0561 5.62853 32.0801 5.91036L34.0222 28.6646Z"
                  fill="#1DCF65"
                />
                <path
                  d="M36.0988 34.6014C36.1313 34.9985 35.8211 35.339 35.4268 35.339H5.59438C5.2009 35.339 4.89092 35.0002 4.92208 34.6037L7.06376 7.34717C7.09168 6.9927 7.38426 6.71973 7.73606 6.71973H33.1958C33.5468 6.71973 33.8391 6.99161 33.868 7.34499L36.0988 34.6014Z"
                  fill="url(#paint0_linear_150_357)"
                />
                <path
                  d="M19.9232 26.6953C16.0402 26.6953 12.8813 22.8631 12.8813 18.1528C12.8813 17.9075 13.0782 17.7085 13.3211 17.7085C13.564 17.7085 13.7608 17.9073 13.7608 18.1528C13.7608 22.3732 16.5253 25.8067 19.9234 25.8067C23.3214 25.8067 26.0859 22.3732 26.0859 18.1528C26.0859 17.9075 26.2827 17.7085 26.5257 17.7085C26.7686 17.7085 26.9654 17.9073 26.9654 18.1528C26.9653 22.8631 23.8062 26.6953 19.9232 26.6953Z"
                  fill="white"
                />
                <path
                  d="M24.2581 18.0337C24.1456 18.0337 24.0331 17.9904 23.9471 17.9036C23.7754 17.7301 23.7754 17.4488 23.9471 17.2753L26.226 14.9729C26.3084 14.8897 26.4203 14.8428 26.5369 14.8428C26.6536 14.8428 26.7654 14.8895 26.8479 14.9729L29.1045 17.2529C29.2762 17.4264 29.2762 17.7077 29.1045 17.8812C28.9327 18.0546 28.6543 18.0547 28.4826 17.8812L26.5368 15.9155L24.569 17.9036C24.4831 17.9904 24.3706 18.0337 24.2581 18.0337Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_150_357"
                  x1="29.8733"
                  y1="31.3337"
                  x2="11.5132"
                  y2="9.9008"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#52D67A" />
                  <stop offset="1" stop-color="#5AEE87" />
                </linearGradient>
                <clipPath id="clip0_150_357">
                  <rect
                    width="31.16"
                    height="30.176"
                    fill="white"
                    transform="translate(4.91992 5.41211)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div>
              <div>
                <div>
                  <div>
                    <div class="dropdown">
                      <button class="dropbtn">
                        <svg
                          width="11"
                          height="18"
                          viewBox="0 0 11 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.13 14.798L6.138 14.816V17.426H5.13V14.798ZM5.22 14.6V3.638L6.03 3.512V14.636L5.22 14.6ZM5.13 0.829999H6.138V3.404L5.13 3.53V0.829999ZM9.144 5.402C9 5.234 8.808 5.072 8.568 4.916C8.328 4.76 8.058 4.622 7.758 4.502C7.458 4.37 7.128 4.268 6.768 4.196C6.42 4.112 6.054 4.07 5.67 4.07C4.686 4.07 3.96 4.256 3.492 4.628C3.024 5 2.79 5.51 2.79 6.158C2.79 6.614 2.91 6.974 3.15 7.238C3.39 7.502 3.756 7.718 4.248 7.886C4.752 8.054 5.388 8.228 6.156 8.408C7.044 8.6 7.812 8.834 8.46 9.11C9.108 9.386 9.606 9.758 9.954 10.226C10.302 10.682 10.476 11.294 10.476 12.062C10.476 12.674 10.356 13.208 10.116 13.664C9.888 14.108 9.564 14.48 9.144 14.78C8.724 15.068 8.232 15.284 7.668 15.428C7.104 15.56 6.492 15.626 5.832 15.626C5.184 15.626 4.548 15.56 3.924 15.428C3.312 15.284 2.73 15.08 2.178 14.816C1.626 14.552 1.11 14.222 0.63 13.826L1.404 12.458C1.596 12.662 1.842 12.866 2.142 13.07C2.454 13.262 2.802 13.442 3.186 13.61C3.582 13.778 4.008 13.916 4.464 14.024C4.92 14.12 5.388 14.168 5.868 14.168C6.78 14.168 7.488 14.006 7.992 13.682C8.496 13.346 8.748 12.86 8.748 12.224C8.748 11.744 8.604 11.36 8.316 11.072C8.04 10.784 7.626 10.544 7.074 10.352C6.522 10.16 5.85 9.968 5.058 9.776C4.194 9.56 3.468 9.326 2.88 9.074C2.292 8.81 1.848 8.468 1.548 8.048C1.26 7.628 1.116 7.082 1.116 6.41C1.116 5.594 1.314 4.904 1.71 4.34C2.106 3.776 2.652 3.35 3.348 3.062C4.044 2.774 4.83 2.63 5.706 2.63C6.282 2.63 6.816 2.69 7.308 2.81C7.812 2.93 8.28 3.098 8.712 3.314C9.144 3.53 9.54 3.788 9.9 4.088L9.144 5.402Z"
                            fill="#1D1F22"
                          />
                        </svg>
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 8 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 0.5L4 3.5L7 0.5"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <div class="dropdown-content">
                        <button className="currency-btn-USD">$ USD</button>
                        <button className="currency-btn-GBP">£ GBP</button>
                        <button className="currency-btn-AUD">A$ AUD</button>
                        <button className="currency-btn-JPY">¥ JPY</button>
                        <button className="currency-btn-RUB">₽ RUB</button>
                      </div>
                    </div>

                    <span className="cart-icon">
                      <svg
                        onClick={toggle}
                        cursor="pointer"
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.5613 3.87359C19.1822 3.41031 18.5924 3.12873 17.9821 3.12873H5.15889L4.75914 1.63901C4.52718 0.773016 3.72769 0.168945 2.80069 0.168945H0.653099C0.295301 0.168945 0 0.450523 0 0.793474C0 1.13562 0.294459 1.418 0.653099 1.418H2.80069C3.11654 1.418 3.39045 1.61936 3.47434 1.92139L6.04306 11.7077C6.27502 12.5737 7.07451 13.1778 8.00152 13.1778H16.4028C17.3289 13.1778 18.1507 12.5737 18.3612 11.7077L19.9405 5.50575C20.0877 4.941 19.9619 4.33693 19.5613 3.87365L19.5613 3.87359ZM18.6566 5.22252L17.0773 11.4245C16.9934 11.7265 16.7195 11.9279 16.4036 11.9279H8.00154C7.68569 11.9279 7.41178 11.7265 7.32789 11.4245L5.49611 4.39756H17.983C18.1936 4.39756 18.4042 4.49824 18.5308 4.65948C18.6567 4.81994 18.7192 5.0213 18.6567 5.22266L18.6566 5.22252Z"
                          fill="#43464E"
                        />
                        <path
                          d="M8.44437 13.9816C7.2443 13.9816 6.25488 14.9279 6.25488 16.0754C6.25488 17.2228 7.24439 18.1691 8.44437 18.1691C9.64445 18.1698 10.6339 17.2236 10.6339 16.076C10.6339 14.9283 9.64436 13.9814 8.44437 13.9814V13.9816ZM8.44437 16.9013C7.9599 16.9013 7.58071 16.5387 7.58071 16.0754C7.58071 15.6122 7.9599 15.2495 8.44437 15.2495C8.92885 15.2495 9.30804 15.6122 9.30804 16.0754C9.30722 16.519 8.90748 16.9013 8.44437 16.9013Z"
                          fill="#43464E"
                        />
                        <path
                          d="M15.6875 13.9814C14.4875 13.9814 13.498 14.9277 13.498 16.0752C13.498 17.2226 14.4876 18.1689 15.6875 18.1689C16.8875 18.1689 17.877 17.2226 17.877 16.0752C17.8565 14.9284 16.8875 13.9814 15.6875 13.9814ZM15.6875 16.9011C15.2031 16.9011 14.8239 16.5385 14.8239 16.0752C14.8239 15.612 15.2031 15.2493 15.6875 15.2493C16.172 15.2493 16.5512 15.612 16.5512 16.0752C16.5512 16.5188 16.1506 16.9011 15.6875 16.9011Z"
                          fill="#43464E"
                        />
                      </svg>
                      <span
                        onClick={toggle}
                        style={{
                          color: "white",
                          width: 10,
                          height: 4,
                          cursor: "pointer",
                        }}
                      >
                        {this.props.cartData.length}
                      </span>
                      {this.state.popUp ? (
                        <div className="modal">
                          <div className="overlay">
                            <div className="modal-content">
                              <h2>My Bag: {this.props.cartTotalQty} item(s)</h2>
                              {this.props.cartData.map((cartItem) => {
                                return (
                                  // <div style={{height: 270, marginBottom: 29}}>
                                  <>
                                    {cartItem.Name ===
                                    "Nike Air Huarache Le" ? (
                                      <>
                                        <div className="cartItemsModal">
                                          <div
                                            style={{ height: 2 }}
                                            className="leftSide"
                                          >
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
                                                {cartItem.clotheSizes.map(
                                                  (btn) => {
                                                    return (
                                                      <button
                                                        style={{
                                                          height: 30,
                                                          width: 33,
                                                          marginRight: 5,
                                                        }}
                                                        className={
                                                          btn.value ===
                                                          cartItem.activeButton
                                                            ? "active"
                                                            : ""
                                                        }
                                                      >
                                                        {btn.value}
                                                      </button>
                                                    );
                                                  }
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="rightSide"
                                            style={{ marginTop: 12 }}
                                          >
                                            <div
                                              className="btnQty"
                                              style={{ height: 190 }}
                                            >
                                              <button
                                                style={{
                                                  height: 28,
                                                  width: 28,
                                                  marginBottom: 28,
                                                }}
                                                onClick={() =>
                                                  this.props.increaseCart(
                                                    cartItem
                                                  )
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
                                                  this.props.decreaseCart(
                                                    cartItem
                                                  )
                                                }
                                              >
                                                -
                                              </button>
                                            </div>
                                            <img
                                              style={{
                                                height: 190,
                                                width: 132,
                                              }}
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
                                          <div
                                            style={{ height: 2 }}
                                            className="leftSide"
                                          >
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
                                                {cartItem.clotheSizes.map(
                                                  (btn) => {
                                                    return (
                                                      <button
                                                        style={{
                                                          height: 24,
                                                          width: 24,
                                                          marginRight: 5,
                                                        }}
                                                        className={
                                                          btn.value ===
                                                          cartItem.activeButton
                                                            ? "active"
                                                            : ""
                                                        }
                                                      >
                                                        {btn.value}
                                                      </button>
                                                    );
                                                  }
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="rightSide"
                                            style={{ marginTop: 12 }}
                                          >
                                            <div
                                              className="btnQty"
                                              style={{ height: 190 }}
                                            >
                                              <button
                                                style={{
                                                  height: 28,
                                                  width: 28,
                                                  marginBottom: 28,
                                                }}
                                                onClick={() =>
                                                  this.props.increaseCart(
                                                    cartItem
                                                  )
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
                                                  this.props.decreaseCart(
                                                    cartItem
                                                  )
                                                }
                                              >
                                                -
                                              </button>
                                            </div>
                                            <img
                                              style={{
                                                height: 190,
                                                width: 132,
                                              }}
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
                                          <div
                                            style={{ height: 2 }}
                                            className="leftSide"
                                          >
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
                                                {cartItem.AllCapacity.map(
                                                  (btn) => {
                                                    return (
                                                      <button
                                                        style={{
                                                          fontSize: 10,
                                                          height: 33,
                                                          width: "auto",
                                                          marginRight: 4,
                                                        }}
                                                        className={
                                                          btn.value ===
                                                          cartItem.activeButton
                                                            ? "active"
                                                            : ""
                                                        }
                                                      >
                                                        {btn.value}
                                                      </button>
                                                    );
                                                  }
                                                )}
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
                                                          btn.value ===
                                                          cartItem.portActiveBtn
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
                                                <div
                                                  style={{}}
                                                  className="btnGroup"
                                                >
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
                                            <div
                                              className="btnQty"
                                              style={{ height: 190 }}
                                            >
                                              <button
                                                style={{
                                                  height: 28,
                                                  width: 28,
                                                  marginBottom: 28,
                                                }}
                                                onClick={() =>
                                                  this.props.increaseCart(
                                                    cartItem
                                                  )
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
                                                  this.props.decreaseCart(
                                                    cartItem
                                                  )
                                                }
                                              >
                                                -
                                              </button>
                                            </div>
                                            <img
                                              style={{
                                                height: 190,
                                                width: 132,
                                              }}
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
                                          <div
                                            style={{ height: 2 }}
                                            className="leftSide"
                                          >
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
                                                {cartItem.AllCapacity.map(
                                                  (btn) => {
                                                    return (
                                                      <button
                                                        style={{
                                                          fontSize: 10,
                                                          height: 33,
                                                          width: 33,
                                                          marginRight: 4,
                                                        }}
                                                        className={
                                                          btn.value ===
                                                          cartItem.activeButton
                                                            ? "active"
                                                            : ""
                                                        }
                                                      >
                                                        {btn.value}
                                                      </button>
                                                    );
                                                  }
                                                )}
                                              </div>
                                              <p>
                                                <b>{cartItem.Color}</b>
                                              </p>
                                              <div className="btnGroup">
                                                {cartItem.swatchColor.map(
                                                  (btn) => {
                                                    return (
                                                      <button
                                                        style={{
                                                          height: 24,
                                                          width: 24,
                                                          marginRight: 4,
                                                          backgroundColor:
                                                            btn.value,
                                                        }}
                                                        className={
                                                          btn.value ===
                                                          cartItem.colorActiveButton
                                                            ? "swatchActiveBtn"
                                                            : ""
                                                        }
                                                      ></button>
                                                    );
                                                  }
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="rightSide"
                                            style={{ marginTop: 12 }}
                                          >
                                            <div
                                              className="btnQty"
                                              style={{ height: 190 }}
                                            >
                                              <button
                                                style={{
                                                  height: 28,
                                                  width: 28,
                                                  marginBottom: 28,
                                                }}
                                                onClick={() =>
                                                  this.props.increaseCart(
                                                    cartItem
                                                  )
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
                                                  this.props.decreaseCart(
                                                    cartItem
                                                  )
                                                }
                                              >
                                                -
                                              </button>
                                            </div>
                                            <img
                                              style={{
                                                height: 190,
                                                width: 132,
                                              }}
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
                                          <div
                                            style={{ height: 2 }}
                                            className="leftSide"
                                          >
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
                                            <div
                                              className="btnQty"
                                              style={{ height: 190 }}
                                            >
                                              <button
                                                style={{
                                                  height: 28,
                                                  width: 28,
                                                  marginBottom: 28,
                                                }}
                                                onClick={() =>
                                                  this.props.increaseCart(
                                                    cartItem
                                                  )
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
                                                  this.props.decreaseCart(
                                                    cartItem
                                                  )
                                                }
                                              >
                                                -
                                              </button>
                                            </div>
                                            <img
                                              style={{
                                                height: 190,
                                                width: 132,
                                              }}
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

                              <div
                                className="mini-Cart-Bottom-Btn"
                                style={{ marginTop: 16 }}
                              >
                                <h3 className="mini-cart-btns">Total:</h3>
                                <h3 className="mini-cart-btns">
                                  $ {this.props.cartTotalAmount}
                                </h3>
                              </div>
                              <div className="mini-Cart-Bottom-Btn">
                                <a href="./cart">
                                  <button
                                    className="mini-cart-btns"
                                    style={{
                                      cursor: "pointer",
                                      height: 46,
                                      width: 155,
                                      background: "white",
                                      border: "solid",
                                      borderColor: "black",
                                      borderWidth: 1,
                                    }}
                                  >
                                    View bag
                                  </button>
                                </a>
                                <button
                                  className="mini-cart-clear"
                                  style={{ height: 46, width: 155 }}
                                  onClick={() => this.props.clearBag()}
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
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
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
    clearBag,
    increaseCart,
    decreaseCart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Header);
