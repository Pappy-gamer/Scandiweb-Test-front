import React, { Component } from 'react'

 class CategoryName extends Component {
  render() {
    return (
      
        <h1 className='categoryName'>{this.props.category}</h1>
      
    )
  }
}
export default CategoryName;