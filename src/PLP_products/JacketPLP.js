import React, { Component } from "react";
import CardListAll from "../components/CardListAll";
import { connect } from "react-redux";
import { addToCart } from "../store/cartSlice";

class Jacket_PLP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Brand: "",
      Gallery: [],
      stuffs: [],
      Prices: "",
      Price_ID: "Price",
      Description: "",
      symbol: "",
      SIZE_ID: "",
      S_ID: "",
      M_ID: "",
      L_ID: "",
      XL_ID: "",
      NAME_ID: "",
      clotheSizes: [],
      activeButton: "S",
      inactiveButtons: [],
      AllPrices: [],
      ID: "jacket-canada-goosee",
      inStock: "",
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
                product(id: "jacket-canada-goosee") {
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
          SIZE_ID: data.data.product.attributes[0].id,
          S_ID: data.data.product.attributes[0].items[0].id,
          M_ID: data.data.product.attributes[0].items[1].id,
          L_ID: data.data.product.attributes[0].items[2].id,
          XL_ID: data.data.product.attributes[0].items[3].id,
          NAME_ID: data.data.product.id,
          AllPrices: data.data.product.prices,
          clotheSizes: data.data.product.attributes[0].items,
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
        image={Image[0]}
        name={Name}
        symbol={Symbol}
        amount={Amount}
        link={"./jacket"}
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

export default connect(null, mapDispatchToProps())(Jacket_PLP);
