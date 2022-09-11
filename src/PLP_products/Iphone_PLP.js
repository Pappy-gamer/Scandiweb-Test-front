import React, { Component } from "react";
import CardListAll from "../components/CardListAll";
import { connect } from "react-redux";
import { addToCart } from "../store/cartSlice";

class Iphone_PLP extends Component {
  state = {
    Name: "",
    Brand: "",
    Gallery: [],
    inStock: "",
    stuffs: [],
    Prices: "",
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
    hasColor: true,
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
    const inStock = this.state.inStock;
    const hasColor = this.state.hasColor;
    const Symbol = this.state.symbol;
    const swatchColor = this.state.swatchColor;
    console.log(swatchColor);
    return (
      <CardListAll
        hasColor={hasColor}
        swatch={swatchColor}
        inStock={inStock}
        ID={this.state}
        image={Image}
        name={Name}
        symbol={Symbol}
        amount={Amount}
        link={"./iphone"}
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

export default connect(null, mapDispatchToProps())(Iphone_PLP);
