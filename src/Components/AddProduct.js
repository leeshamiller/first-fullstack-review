import React from 'react'

export default function AddProduct(props){
    return(
        <div className='addItem'> 
        <h2>Add an Item</h2>
            <span>Name:</span><input onChange={(e) => props.handleChange('name', e.target.value)} value={props.name} type="text"/>
            <span>Description:</span><input onChange={(e) => props.handleChange('description', e.target.value)} value={props.description} type="text"/>
            <span>Price: </span><input onChange={(e) => props.handleChange('price', e.target.value)} value={props.price} type="text"/>
            <span>Image: </span><input onChange={(e) => props.handleChange('image', e.target.value)} value={props.image} type="text"/>
            <button onClick={props.addItem}>Add</button>
        </div>
    )
}