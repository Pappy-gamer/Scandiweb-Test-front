import React, { Component } from "react";
import CardListAll from "../components/CardListAll";
import { connect } from "react-redux";
import { addToCart } from "../store/cartSlice";

class Imac_PLP extends Component {
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
    hasColor: false,
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
        link={"./imac"}
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

export default connect(null, mapDispatchToProps())(Imac_PLP);
