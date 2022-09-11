import React, { Component } from "react";
import CardListAll from "../components/CardListAll";
import { connect } from "react-redux";
import { addToCart } from "../store/cartSlice";

class Airtag_PLP extends Component {
  state = {
    Name: "",
    Brand: "",
    Gallery: [],
    Prices: "",
    inStock: "",
    Price_ID: "Price",
    Description: "",
    symbol: "",
    AllPrices: [],
    ID: "apple-airtag",
    hasColor: false,
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
        });
      });
  }
  render() {
    const Image = this.state.Gallery;
    const Brand = this.state.Brand;
    const Name = this.state.Name;
    const Amount = this.state.Prices;
    const hasColor = this.state.hasColor;
    const Symbol = this.state.symbol;
    const inStock = this.state.inStock;
    return (
      <CardListAll
        hasColor={hasColor}
        inStock={inStock}
        ID={this.state}
        image={Image}
        name={Name}
        symbol={Symbol}
        amount={Amount}
        link={"./airtag"}
        brand={Brand}
        click={() => this.props.addToCart(this.state)}
      />
    );
  }
}
const mapDispatchToProps = () => {
  return {
    addToCart,
  };
};

export default connect(null, mapDispatchToProps())(Airtag_PLP);
