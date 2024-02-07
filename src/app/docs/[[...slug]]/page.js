import React from 'react';

const DocsSection = ({params}) => {
    return (
        <div>
            {params.slug?.length === 2 ? (
                <h1>{`View docs for ${params.slug[0]} and ${params.slug[1]}`}</h1>
            ) :  params.slug?.length === 1 ? (
                <h1>{`View Docs for ${params.slug[0]}`}</h1>
            ): <h1>View Docs</h1>}
        </div>
    );
}

export default DocsSection;
