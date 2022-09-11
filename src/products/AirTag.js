import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/cartSlice";

class AirTag extends Component {
  state = {
    Name: "",
    Brand: "",
    Gallery: [],
    Prices: "",
    Price_ID: "Price",
    Description: "",
    symbol: "",
    inStock: "",
    AllPrices: [],
    ID: "apple-airtag",
    Amount_Currency: [],
  };

  componentDidMount() {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
            query {
                product(id: "apple-airtag") {
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
          AllPrices: data.data.product.prices,
          inStock: data.data.product.inStock,
          Amount_Currency: data.data.product.prices,
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
    const InStock = this.state.inStock;
    const Amount_Currency = this.state.Amount_Currency;
    console.log(Amount_Currency);
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

          <b className="typography" style={{ marginBottom: 17 }}>
            PRICE:
          </b>

          <b id="pdpPrice" className="tag" style={{ marginBottom: 35 }}>
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

export default connect(null, mapDispatchToProps())(AirTag);
