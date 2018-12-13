import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Product from "./Components/Product";
import AddProduct from "./Components/AddProduct";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      name: "",
      description: "",
      price: "",
      image: ""
    };
  }
  componentDidMount() {
    axios.get("/api/products").then(res => {
      this.setState({ products: res.data });
    });
  }
  handleChange = (key, val) => {
    this.setState({
      [key]: val
    });
  };
  addItem = () => {
    const {name, description, price, image} = this.state
    axios.post('/api/product', {name, description, price, image}).then(res => {
      console.log(res.data)
      this.setState({products: res.data})
    })
  }
  saveEdit = (id, body) => {
    
  };

  deleteItem = (id) => {

  }
  render() {
    console.log(this.state);
    let productList = this.state.products.map(product => {
      return (
        <Product
          key={product.product_id}
          id={product.product_id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image_url}
          saveEdit={this.saveEdit}
          deleteItem={() => this.deleteItem(product.product_id)}
        />
      );
    });
    return (
      <div className="App">
        <AddProduct handleChange={this.handleChange} addItem={this.addItem}/>
        {productList}
      </div>
    );
  }
}

export default App;
