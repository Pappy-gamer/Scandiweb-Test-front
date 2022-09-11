import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import DisplayAllCategories from "./components/DisplayAllCategories";
import DisplayTechCategories from "./components/DisplayTechCategories";
import DisplayClothesCategories from "./components/DisplayClothesCategories";
import NikeAir from "./products/NikeAir";
import Jacket from "./products/Jacket";
import PlayStation from "./products/PlayStation5";
import Xbox from "./products/Xbox";
import Imac from "./products/Imac";
import Iphone from "./products/Iphone";
import AirpodsPro from "./products/AirpodsPro";
import AirTag from "./products/AirTag";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      uri: "http://localhost:4000/graphql",
    });

    return (
      <div>
        <ApolloProvider client={client}>
          <Header />
          <div className="App">
            <Router>
              <Routes>
                <Route path="/" element={<DisplayAllCategories />} />
                <Route path="/tech" element={<DisplayTechCategories />} />
                <Route path="/clothes" element={<DisplayClothesCategories />} />
                <Route path="/nike" element={<NikeAir />} />
                <Route path="/jacket" element={<Jacket />} />
                <Route path="/playstation" element={<PlayStation />} />
                <Route path="/xbox" element={<Xbox />} />
                <Route path="/imac" element={<Imac />} />
                <Route path="/iphone" element={<Iphone />} />
                <Route path="/airpods" element={<AirpodsPro />} />
                <Route path="/airtag" element={<AirTag />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Router>
          </div>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
