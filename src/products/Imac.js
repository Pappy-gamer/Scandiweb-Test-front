import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/cartSlice";

class Imac extends Component {
  state = {
    Name: "",
    Brand: "",
    Gallery: [],
    stuffs: [],
    Prices: "",
    Price_ID: "Price",
    Description: "",
    symbol: "",
    inStock: "",
    WithUSB: "",
    USB_ID: "",
    yes_USB: "",
    no_USB: "",
    Capacity: "",
    AllCapacity: [],
    Ports: [],
    AllPorts: [],
    AllTouchId: [],
    Capacity_ID: "",
    FirstCapacity: "",
    SecondCapacity: "",
    Touch_ID: "",
    Touch_name: "",
    AllPrices: [],
    activeButton: "256GB",
    portActiveBtn: "Yes",
    portInactiveBtn: [],
    touchIDactiveBtn: "Yes",
    touchIDinactiveBtn: [],
    ID: "apple-imac-2021",
  };
  componentDidMount() {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query {
            product(id: "apple-imac-2021") {
              id
              name
              description
              gallery
              inStock
              category
              brand
              attributes {
                id
                name
                type
                items {
                displayValue
                  value
                  id
                }
              }
              prices{
                currency{
                  label
                  symbol
                }
                amount
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          stuffs: data.data.product,
          Gallery: data.data.product.gallery,
          Brand: data.data.product.brand,
          Name: data.data.product.name,
          Prices: data.data.product.prices[0].amount,
          Description: data.data.product.description,
          symbol: data.data.product.prices[0].currency.symbol,
          Capacity: data.data.product.attributes[0].name,
          Capacity_ID: data.data.product.attributes[0].id,
          FirstCapacity: data.data.product.attributes[0].items[0].displayValue,
          SecondCapacity: data.data.product.attributes[0].items[1].displayValue,
          Ports: data.data.product.attributes[1].items,
          WithUSB: data.data.product.attributes[1].name,
          USB_ID: data.data.product.attributes[1].id,
          yes_USB: data.data.product.attributes[1].items[0].displayValue,
          no_USB: data.data.product.attributes[1].items[1].displayValue,
          Touch_ID: data.data.product.attributes[2].id,
          Touch_name: data.data.product.attributes[2].name,
          AllPrices: data.data.product.prices,
          AllCapacity: data.data.product.attributes[0].items,
          AllTouchId: data.data.product.attributes[2].items,
          inStock: data.data.product.inStock,
        });
      });
  }

  render() {
    const Image = this.state.Gallery;
    const Brand = this.state.Brand;
    const Name = this.state.Name;
    const Amount = this.state.Prices;
    const Description = this.state.Description;
    const Symbol = this.state.symbol;
    const Capacity = this.state.Capacity;
    const AllCapacity = this.state.AllCapacity;
    const Ports = this.state.Ports;
    const AllTouchId = this.state.AllTouchId;
    const Capacity_ID = this.state.Capacity_ID;
    const WithUSB = this.state.WithUSB;
    const Touch_ID = this.state.Touch_ID;
    const Touch_name = this.state.Touch_name;
    const USB_ID = this.state.USB_ID;
    const InStock = this.state.inStock;
    const handleClick = (text) => {
      this.setState({
        activeButton: text,
        ID: text,
        inactiveButtons: AllCapacity.filter(
          (eachCapacity) => eachCapacity.value !== text
        ),
      });
    };

    const porthandleClick = (text) => {
      this.setState({
        portActiveBtn: text,
        ID: text,
        portInactiveBtn: Ports.filter((eachPort) => eachPort.value !== text),
      });
    };

    const touchIDhandleClick = (text) => {
      this.setState({
        touchIDactiveBtn: text,
        ID: text,
        touchIDinactiveBtn: AllTouchId.filter(
          (touchID) => touchID.value !== text
        ),
      });
    };
    return (
      <div className="pdp">
        <div className="mini-img">
          <img src={Image[0]} className="imageee" alt="imageee" />
        </div>

        <img
          className="skate"
          style={{ marginBottom: 23 }}
          src={Image[0]}
          alt="skateboard"
        />

        <div className="description1">
          <div>
            <h1>{Brand}</h1>
            <h2 style={{ paddingBottom: 40 }}>{Name}</h2>
          </div>

          <h2>
            <b id={Capacity_ID} style={{ marginBottom: 8, marginTop: 18 }}>
              {Capacity}:
            </b>
          </h2>

          <div className="btnGroup">
            {AllCapacity.map((eachCapacity) => {
              return (
                <button
                  ID={eachCapacity.value}
                  style={{ width: 63, height: 43, borderStyle: "solid" }}
                  onClick={() => handleClick(eachCapacity.value)}
                  className={
                    eachCapacity.value === this.state.activeButton
                      ? "active"
                      : ""
                  }
                  key={eachCapacity.id}
                >
                  {eachCapacity.value}
                </button>
              );
            })}
          </div>

          <b className="typography" id={USB_ID} style={{ marginBottom: 8 }}>
            {WithUSB}:
          </b>

          <div className="btnGroup">
            {Ports.map((port) => {
              return (
                <button
                  ID="2"
                  style={{ width: 63, height: 43, borderStyle: "solid" }}
                  onClick={() => porthandleClick(port.value)}
                  className={
                    port.value === this.state.portActiveBtn ? "active" : ""
                  }
                  key={port.id}
                >
                  {port.value}
                </button>
              );
            })}
          </div>

          <b className="typography" id={Touch_ID}>
            {Touch_name}:
          </b>
          <div className="btnGroup">
            {AllTouchId.map((touch) => {
              return (
                <button
                  ID="1"
                  style={{ width: 63, height: 43, borderStyle: "solid" }}
                  onClick={() => touchIDhandleClick(touch.value)}
                  className={
                    touch.value === this.state.touchIDactiveBtn ? "active" : ""
                  }
                  key={touch.id}
                >
                  {touch.value}
                </button>
              );
            })}
          </div>
          <b className="typography" style={{ marginBottom: 17 }}>
            PRICE:
          </b>

          <b className="tag" style={{ marginBottom: 35 }}>
            {Symbol} {Amount}
          </b>

          {InStock ? (
            <button
              className="add"
              onClick={() => this.props.addToCart(this.state)}
            >
              ADD TO CART
            </button>
          ) : (
            <button
              className="out-of-stock"
              onClick={() => alert(`${Name} is out of stock`)}
            >
              OUT OF STOCK
            </button>
          )}

          <p className="properties">
            <div dangerouslySetInnerHTML={{ __html: Description }} />
          </p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    addToCart,
  };
};

export default connect(null, mapDispatchToProps())(Imac);
