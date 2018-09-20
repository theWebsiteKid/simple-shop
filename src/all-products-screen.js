import React from 'react';
import { connect } from 'react-redux';
import ProductEntry from './product';

let mapStateToProps = (state) => {
    return {products: state.products}
};

let AllProducts = (props) =>
    <div>
        {props.products.map(product =>
            <ProductEntry product={product} key={product.id} />
        )}
    </div>

let AllProductsContainer = connect(mapStateToProps)(AllProducts)
export default AllProductsContainer;