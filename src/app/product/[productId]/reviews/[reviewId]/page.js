import React from 'react';
import { notFound } from 'next/navigation';

const Reviews = ({params}) => {
    if(parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <div>
            <h1>Review {params.reviewId} of Product {params.productId}</h1>
        </div>
    );
}

export default Reviews;
