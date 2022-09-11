import React, { Component } from "react";
import CardListAll from "./CardListAll";
import CategoryName from "./CategoryName";
import { connect } from "react-redux";
import { addToCart } from "../store/cartSlice";
import NikePLP from "../PLP_products/NikePLP";
import JacketPLP from "../PLP_products/JacketPLP";
import ImacPLP from "../PLP_products/Imac_PLP";
import IphonePLP from "../PLP_products/Iphone_PLP";
import AirtagPLP from "../PLP_products/Airtag_PLP";

class DisplayAllCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jacketImage: "",
      stuffs: [],
      AllCategory: "",
      sonySwatch: [],
      xboxSwatch: [],
    };
  }

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
                        inStock
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
        var stuffs = data.data.categories[0].products;
        // console.log(stuffs[1].gallery[5]);
        this.setState({
          stuffs: data.data.categories[0].products,
          jacketImage: stuffs[1].gallery[5],
          AllCategory: data.data.categories[0].name,
          sonySwatch: data.data.categories[0].products[2].attributes[0].items,
          xboxSwatch: data.data.categories[0].products[3].attributes[0].items,
        });
      });
  }

  render() {
    const Stuffs = this.state.stuffs;
    const ID = Stuffs.map((something) => something.id);
    const Names = Stuffs.map((something) => something.name);
    const Image = Stuffs.map((something) => something.gallery);
    const Brand = Stuffs.map((something) => something.brand);
    const inStock = Stuffs.map((something) => something.inStock);
    // const JacketImage = this.state.jacketImage
    const Amount = Stuffs.map((something) => something.prices[0].amount);
    const Symbol = Stuffs.map(
      (something) => something.prices[0].currency.symbol
    );
    const AllCategory = this.state.AllCategory;
    const techSwatch = Stuffs.map((something) => something.attributes[0]);
    const sonySwatch = this.state.sonySwatch;
    const xboxSwatch = this.state.xboxSwatch;
    console.log(techSwatch);
    // console.log(inStock)
    // console.log(Image)

    // const mappedStuffs = Stuffs.map((dat) => dat.name)
    // console.log(Stuffs)
    return (
      <>
        <CategoryName category={AllCategory.toUpperCase()} />
        <div className="flex-container">
          <div className="card card-0">
            <NikePLP />
          </div>

          <div className="card">
            <JacketPLP />
          </div>

          <div className="card">
            <IphonePLP />
          </div>

          <div className="card card-3">
            <CardListAll
              swatch={sonySwatch}
              hasColor={true}
              inStock={inStock[2]}
              image={Image[2]}
              name={Names[2]}
              symbol={Symbol[2]}
              amount={Amount[2]}
              link={"./playstation"}
              ID={ID[2]}
              brand={Brand[2]}
              click={() => alert("PlayStation 5 is out of stock")}
            />
          </div>

          <div className="card">
            <CardListAll
              swatch={xboxSwatch}
              hasColor={true}
              inStock={inStock[3]}
              image={Image[3]}
              name={Names[3]}
              symbol={Symbol[3]}
              amount={Amount[3]}
              link={"./xbox"}
              ID={ID[3]}
              brand={Brand[3]}
              click={() => alert("Xbox series x is out of stock")}
            />
          </div>

          <div className="card">
            <ImacPLP />
          </div>

          <div className="card">
            <CardListAll
              hasColor={false}
              inStock={inStock[6]}
              image={Image[6]}
              name={Names[6]}
              symbol={Symbol[6]}
              amount={Amount[6]}
              link={"./airpods"}
              ID={ID[6]}
              brand={Brand[6]}
              click={() => alert("Airpods pro  is out of stock")}
            />
          </div>

          <div className="card">
            <AirtagPLP />
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = () => {
  return {
    addToCart,
  };
};

export default connect(null, mapDispatchToProps())(DisplayAllCategories);
