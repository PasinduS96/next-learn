import React from 'react';

const ProductData = ({params}) => {
    return (
        <div>
            <h1>Product {params.productId}</h1>
        </div>
    );
}

export default ProductData;
