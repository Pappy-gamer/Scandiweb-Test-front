import React, { Component } from "react";
import CategoryName from "./CategoryName";
import { connect } from "react-redux";
import { addToCart } from "../store/cartSlice";
import NikePLP from "../PLP_products/NikePLP";
import JacketPLP from "../PLP_products/JacketPLP";

class DisplayClothesCategories extends Component {
  state = {
    jacketImage: [],
    stuffs: [],
    ClothesCategory: "",
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
        var stuffs = data.data.categories[1].products;
        this.setState({
          stuffs: data.data.categories[1].products,
          jacketImage: stuffs[1].gallery[1],
          ClothesCategory: data.data.categories[1].name,
        });
      });
  }

  render() {
    const ClothesCategory = this.state.ClothesCategory;

    return (
      <>
        <CategoryName category={ClothesCategory.toUpperCase()} />
        <div className="flex-container">
          <div className="card card-0">
            <NikePLP />
          </div>

          <div className="card">
            <JacketPLP />
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

export default connect(null, mapDispatchToProps())(DisplayClothesCategories);
