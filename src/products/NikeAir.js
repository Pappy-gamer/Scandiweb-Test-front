import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/cartSlice";
import "../App.css";

class NikeAir extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Brand: "",
      Gallery: [],
      Prices: "",
      Price_ID: "Price",
      Description: "",
      inStock: "",
      symbol: "",
      SIZE_ID: "",
      NAME_ID: "",
      ID: "huarache-x-stussy-le",
      clotheSizes: [],
      activeButton: "40",
      inactiveButtons: [],
      AllPrices: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query {
          product(id: "huarache-x-stussy-le") {
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
          // stuffs: data.data.product,
          Gallery: data.data.product.gallery,
          Brand: data.data.product.brand,
          Name: data.data.product.name,
          Prices: data.data.product.prices[0].amount,
          Description: data.data.product.description,
          symbol: data.data.product.prices[0].currency.symbol,
          SIZE_ID: data.data.product.attributes[0].id,
          NAME_ID: data.data.product.id,
          clotheSizes: data.data.product.attributes[0].items,
          AllPrices: data.data.product.prices,
          inStock: data.data.product.inStock,
        });
      });
  }
  render() {
    // const Stuffs = this.state.stuffs;
    const Image = this.state.Gallery;
    const Brand = this.state.Brand;
    const Name = this.state.Name;
    const Amount = this.state.Prices;
    const Description = this.state.Description;
    const SIZE_ID = this.state.SIZE_ID;
    const Symbol = this.state.symbol;
    const NAME_ID = this.state.NAME_ID;
    const clotheSizes = this.state.clotheSizes;
    console.log(this.state.AllPrices[1]);
    const InStock = this.state.inStock;
    // const NikeData = this.state
    // console.log(NikeData)

    // const ID = this.state.ID
    // const Cart_Data = cart_arr.push(Brand)

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
      console.log(text);
      console.log(clotheSizes.filter((Size) => Size.value !== text));
      this.setState({
        activeButton: text,
        ID: text,
        inactiveButtons: clotheSizes.filter((Size) => Size.value !== text),
      });
    };

    return (
      <div>
        <div className="pdp" id="nikes">
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

          <img className="skate" id="bigImg" src={Image[0]} alt="skateboard" />

          <div className="description1">
            <h1 id={NAME_ID}>{Brand}</h1>
            <h2>{Name}</h2>

            <b className="typography" id={SIZE_ID}>
              SIZE:
            </b>

            <div className="btn">
              {clotheSizes.map((Size) => {
                return (
                  <button
                    ID={Size.value}
                    style={{ width: 63, height: 43, borderStyle: "solid" }}
                    onClick={() => handleClick(Size.value)}
                    className={
                      Size.value === this.state.activeButton ? "active" : ""
                    }
                    key={Size.id}
                  >
                    {Size.value}
                  </button>
                );
              })}
            </div>

            <br />

            <br />
            <br />
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
      </div>
    );
  }
}
const mapDispatchToProps = () => {
  return {
    addToCart,
  };
};

export default connect(null, mapDispatchToProps())(NikeAir);
