import React, { Component } from "react";
import CardListAll from "./CardListAll";
import CategoryName from "./CategoryName";
import { connect } from "react-redux";
import { addToCart } from "../store/cartSlice";
import ImacPLP from "../PLP_products/Imac_PLP";
import IphonePLP from "../PLP_products/Iphone_PLP";
import AirtagPLP from "../PLP_products/Airtag_PLP";

class DisplayTechCategories extends Component {
  state = {
    stuffs: [],
    TechCategory: "",
    sonySwatch: [],
    xboxSwatch: [],
  };
  componentDidMount() {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
            query GetCategories {
              
              categories {
                name
              products {
                id
                name
                brand
                gallery
                category
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
                  prices {
                    amount
                    currency {
                      symbol
                    }
                }
              }
          }
        }   
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          stuffs: data.data.categories[2].products,
          TechCategory: data.data.categories[2].name,
          sonySwatch: data.data.categories[0].products[2].attributes[0].items,
          xboxSwatch: data.data.categories[0].products[3].attributes[0].items,
        });
      });
  }

  render() {
    const Stuffs = this.state.stuffs;
    const ID = Stuffs.map((something) => something.id);
    const Names = Stuffs.map((something) => something.name);
    const Brand = Stuffs.map((something) => something.brand);

    const Image = Stuffs.map((something) => something.gallery);
    const Amount = Stuffs.map((something) => something.prices[0].amount);
    const Symbol = Stuffs.map(
      (something) => something.prices[0].currency.symbol
    );
    const sonySwatch = this.state.sonySwatch;
    const xboxSwatch = this.state.xboxSwatch;
    const Category = this.state.TechCategory;
    return (
      <div>
        <CategoryName category={Category.toUpperCase()} />
        <div className="flex-container">
          <div className="card card-0">
            <CardListAll
              swatch={sonySwatch}
              hasColor={true}
              image={Image[0]}
              name={Names[0]}
              symbol={Symbol[0]}
              amount={Amount[0]}
              link={"./playstation"}
              ID={ID[0]}
              brand={Brand[0]}
              click={() => alert("PlayStation 5 is out of stock")}
            />
          </div>

          <div className="card">
            <CardListAll
              swatch={xboxSwatch}
              hasColor={true}
              image={Image[1]}
              name={Names[1]}
              symbol={Symbol[1]}
              amount={Amount[1]}
              link={"./xbox"}
              ID={ID[1]}
              brand={Brand[1]}
              click={() => alert("Xbox series x is out of stock")}
            />
          </div>

          <div className="card">
            <ImacPLP />
          </div>

          <div className="card card-3">
            <IphonePLP />
          </div>

          <div className="card">
            <CardListAll
              hasColor={false}
              image={Image[4]}
              name={Names[4]}
              symbol={Symbol[4]}
              amount={Amount[4]}
              link={"./airpods"}
              ID={ID[4]}
              brand={Brand[4]}
              click={() => alert("Airpods pro  is out of stock")}
            />
          </div>

          <div className="card">
            <AirtagPLP />
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

export default connect(null, mapDispatchToProps())(DisplayTechCategories);
