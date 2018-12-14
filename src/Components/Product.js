import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      name: props.name,
      description: props.description,
      price: props.price,
      image: ''
    };
  }
  handleChange = (key, val) => {
    this.setState({
      [key]: val
    });
  }
  editToggle = () => {
    this.setState({
      edit: !this.state.edit
    });
  };
  saveEdit = () => {
    this.props.saveEdit(this.props.id, {name: this.state.name, description: this.state.description, price: this.state.price, image: this.state.image})
    this.editToggle();
  };
  render() {
    return (
      <div className="product">
        <img src={this.props.image} alt="product" />
        <div className="productInfo">
          {this.state.edit ? (
              <>
              <span>Name: </span>
              <input value={this.state.name} onChange={(e) => this.handleChange('name', e.target.value)} type="text"/><br/>
              <span>Description: </span>
              <input value={this.state.description} onChange={(e) => this.handleChange('description', e.target.value)}type="text"/><br/>
              <span>Price</span>
              <input value={this.state.price} onChange={(e) => this.handleChange('price', e.target.value)}type="text"/><br/>
              <span>Image URL: </span>
              <input value={this.state.image} onChange={(e) => this.handleChange('image', e.target.value)}type="text"/><br/>
            <button style={{marginTop: '36px'}}onClick={this.saveEdit}>Save</button>
              </>
          ) : (
            <>
              <h4>{this.props.name}</h4>
              <p>{this.props.description}</p>
              <p>${this.props.price}</p>
              <button onClick={this.editToggle}>Edit</button>
              <button onClick={this.props.deleteItem}>Delete</button>
            </>
          )}
        </div>
      </div>
    );
  }
}
