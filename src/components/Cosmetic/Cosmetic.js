import React from 'react';
import { addToBd, removeFromeDb } from '../Utilities/fakedb';
import './cosmetic.css'

const Cosmetic = (props) => {
    const{name, price, id} = props.cosmei;

    const AddToCard = (id) =>{
        addToBd(id);
    }
    
    const removeCard = id =>{
      removeFromeDb()
    }


    return (
        <div className='product'>
            
            <h2>Buy this:{name}</h2>
            <p>Only for:${ price}</p>
            <p>It has id:{id}</p>
            <button onClick={() => AddToCard(id)}>Add To Card</button>
            <button onClick={() => removeCard(id)}>Remove</button>
          
        </div>
    );
};

export default Cosmetic;