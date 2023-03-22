import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h2>country: {props.name}</h2>
            <h4>Population: {props.population}</h4>
            <p><small>Area: {props.area}</small></p>
        </div>
    );
};

export default Country;