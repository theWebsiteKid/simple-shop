import React from 'react';

let ProductEntry = (props) =>
    <div>
        <h2>{props.product.title}</h2>
        <p>{props.product.description}</p>
        <img src={props.product.imageURL} width="300px"/>
    </div>

export default ProductEntry;