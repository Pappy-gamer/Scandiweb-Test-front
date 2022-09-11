import React, { Component } from "react";
import CardListAll from "../components/CardListAll";
import { connect } from "react-redux";
import { addToCart } from "../store/cartSlice";

class NikePLP extends Component {
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
      hasColor: false,
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
        this.setState({
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
    const Image = this.state.Gallery;
    const Brand = this.state.Brand;
    const Name = this.state.Name;
    const Amount = this.state.Prices;
    const hasColor = this.state.hasColor;
    const inStock = this.state.inStock;
    const Symbol = this.state.symbol;
    return (
      <CardListAll
        hasColor={hasColor}
        inStock={inStock}
        ID={this.state}
        image={Image}
        name={Name}
        symbol={Symbol}
        amount={Amount}
        link={"./nike"}
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

export default connect(null, mapDispatchToProps())(NikePLP);
