import React from 'react';

const Reviews = ({params}) => {
    return (
        <div>
            <h1>Review {params.reviewId} of Product {params.productId}</h1>
        </div>
    );
}

export default Reviews;
