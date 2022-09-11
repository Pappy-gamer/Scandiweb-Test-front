import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/cartSlice";

class Iphone extends Component {
  state = {
    Name: "",
    Brand: "",
    Gallery: [],
    stuffs: [],
    Prices: "",
    inStock: "",
    Price_ID: "Price",
    Description: "",
    symbol: "",
    Capacity: "",
    AllCapacity: [],
    activeButton: "512G",
    inactiveButtons: [],
    Color: "",
    swatchColor: [],
    AllPrices: [],
    colorActiveButton: "#44FF03",
    colorInactiveButtons: [],
    ID: "",
  };
  componentDidMount() {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
            query {
                product(id: "apple-iphone-12-pro") {
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
        // var stuffs = data.data.product;
        // console.log(stuffs);
        this.setState({
          stuffs: data.data.product,
          Gallery: data.data.product.gallery,
          Brand: data.data.product.brand,
          Name: data.data.product.name,
          Prices: data.data.product.prices[0].amount,
          Description: data.data.product.description,
          symbol: data.data.product.prices[0].currency.symbol,
          Capacity: data.data.product.attributes[0].name,
          AllCapacity: data.data.product.attributes[0].items,
          Color: data.data.product.attributes[1].name,
          swatchColor: data.data.product.attributes[1].items,
          FifthColor: data.data.product.attributes[1].items[4].value,
          AllPrices: data.data.product.prices,
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
    const Color = this.state.Color;
    const swatchColor = this.state.swatchColor;
    const InStock = this.state.inStock;
    console.log(swatchColor);

    const handleClick = (text) => {
      this.setState({
        activeButton: text,
        ID: text,
        inactiveButtons: AllCapacity.filter(
          (eachCapacity) => eachCapacity.value !== text
        ),
      });
    };

    const colorHandleClick = (text) => {
      this.setState({
        colorActiveButton: text,
        ID: text,
        colorInactiveButtons: swatchColor.filter((col) => col.value !== text),
      });
    };
    return (
      <div className="pdp">
        <div className="mini-img">
          <img src={Image[0]} className="imageee" alt={Name} />
        </div>

        <img className="skate" id="bigImg" src={Image[0]} alt={Name} />

        <div className="description1">
          <div>
            <h1>{Brand}</h1>
            <h2 style={{ paddingBottom: 10 }}>{Name}</h2>
          </div>

          <b className="typography" style={{ marginBottom: 8, marginTop: 18 }}>
            {Capacity}:
          </b>

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

          <h2>{Color}:</h2>

          <div className="swatch">
            {swatchColor.map((color) => {
              return (
                <button
                  ID={color.value}
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: color.value,
                    marginRight: 4,
                  }}
                  onClick={() => colorHandleClick(color.value)}
                  className={
                    color.value === this.state.colorActiveButton
                      ? "swatchActiveBtn"
                      : ""
                  }
                  key={color.id}
                ></button>
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

export default connect(null, mapDispatchToProps())(Iphone);
