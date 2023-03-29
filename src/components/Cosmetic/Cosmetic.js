import React from 'react';
import './cosmetic.css'

const Cosmetic = (props) => {
    const{name, price, id} = props.cosmei;
    return (
        <div className='product'>
            
            <h2>Buy this:{name}</h2>
            <p>Only for:${ price}</p>
            <p>id:{id}</p>

            {/* <h2>Buy this:{props.cosmei.name}</h2>
            <p>Only for:${props.cosmei. price}</p> */}
        </div>
    );
};

export default Cosmetic;