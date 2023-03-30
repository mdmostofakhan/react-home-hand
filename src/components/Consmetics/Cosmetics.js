import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotalPrice } from '../Utilities/Calculate';


const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);

  useEffect( () =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data =>setCosmetics(data))
  },[])

  const total = getTotalPrice(cosmetics);

    return (
        <div>
            <h1>Welcome to the Cosmetics</h1>
            <p>Money total:{total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic
                 key={cosmetic.id}
                 cosmei={cosmetic}

                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;