import React from 'react';
import { addToBd } from '../Utilities/fakedb';
import './cosmetic.css'

const Cosmetic = (props) => {
    const{name, price, id} = props.cosmei;

    const AddToCard = (id) =>{
        addToBd(id);
    }


    return (
        <div className='product'>
            
            <h2>Buy this:{name}</h2>
            <p>Only for:${ price}</p>
            <p>It has id:{id}</p>
            <button onClick={() => AddToCard(id)}>Add To Card</button>
            {/* <button onClick={() => AddToCard(_id)}>Pashe but</button> */}


            {/* <h2>Buy this:{props.cosmei.name}</h2>
            <p>Only for:${props.cosmei. price}</p> */}
        </div>
    );
};

export default Cosmetic;