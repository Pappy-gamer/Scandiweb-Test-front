import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/cartSlice";

class PlayStation extends Component {
  state = {
    Name: "",
    Brand: "",
    Gallery: [],
    Prices: "",
    Price_ID: "Price",
    Description: "",
    symbol: "",
    FirstCapacity: "",
    SecondCapacity: "",
    Capacity: "",
    AllCapacity: [],
    Color: "",
    swatchColor: [],
    clotheSizes: [],
    activeButton: "512G",
    colorActiveButton: "#44FF03",
    colorInactiveButtons: [],
    FirstColor: "",
    SecondColor: "",
    ThirdColor: "",
    FourthColor: "",
    FifthColor: "",
    AllPrices: [],
    ID: "ps-5",
    inStock: "",
    hasColor: true,
  };
  componentDidMount() {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query {
            product(id: "ps-5") {
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
          Gallery: data.data.product.gallery,
          Brand: data.data.product.brand,
          Name: data.data.product.name,
          Prices: data.data.product.prices[0].amount,
          Description: data.data.product.description,
          symbol: data.data.product.prices[0].currency.symbol,
          FirstCapacity: data.data.product.attributes[1].items[0].displayValue,
          SecondCapacity: data.data.product.attributes[1].items[1].displayValue,
          Capacity: data.data.product.attributes[1].name,
          AllCapacity: data.data.product.attributes[1].items,
          Color: data.data.product.attributes[0].name,
          swatchColor: data.data.product.attributes[0].items,
          FirstColor: data.data.product.attributes[0].items[0].value,
          SecondColor: data.data.product.attributes[0].items[1].value,
          ThirdColor: data.data.product.attributes[0].items[2].value,
          FourthColor: data.data.product.attributes[0].items[3].value,
          FifthColor: data.data.product.attributes[0].items[4].value,
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
    const swatchColor = this.state.swatchColor;
    const Color = this.state.Color;
    const InStock = this.state.inStock;
    console.log(swatchColor);

    const mini_0 = () => {
      document.getElementById("bigImg").setAttribute("src", Image[0]);
    };

    const mini_1 = () => {
      document.getElementById("bigImg").setAttribute("src", Image[1]);
    };

    const mini_2 = () => {
      document.getElementById("bigImg").setAttribute("src", Image[2]);
    };

    const mini_3 = () => {
      document.getElementById("bigImg").setAttribute("src", Image[3]);
    };

    const mini_4 = () => {
      document.getElementById("bigImg").setAttribute("src", Image[4]);
    };

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
      <div>
        <div className="pdp">
          <div className="mini-img">
            <img
              onClick={mini_0}
              src={Image[0]}
              className="imageee"
              alt="imageee"
            />

            <img
              onClick={mini_1}
              src={Image[1]}
              className="imageee"
              alt="imageee"
            />

            <img
              onClick={mini_2}
              src={Image[2]}
              className="imageee"
              alt="imageee"
            />

            <img
              onClick={mini_3}
              src={Image[3]}
              className="imageee"
              alt="imageee"
            />

            <img
              onClick={mini_4}
              src={Image[4]}
              className="imageee"
              alt="imageee"
            />
          </div>
          <img className="skate" id="bigImg" src={Image[2]} alt="bigImage" />

          <div className="description1">
            <div>
              <h1>{Brand}</h1>
              <h2 style={{ paddingBottom: 10 }}>{Name}</h2>
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

            <b
              className="typography"
              style={{ marginBottom: 8, marginTop: 18 }}
            >
              {Capacity}:
            </b>

            <div style={{ marginBottom: 25 }}>
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
                style={{ cursor: "not-allowed" }}
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
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    addToCart,
  };
};

export default connect(null, mapDispatchToProps())(PlayStation);
