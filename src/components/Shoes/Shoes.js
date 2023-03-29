import React from 'react';
import { add, multiy } from '../Utilities/Calculate';

const Shoes = () => {
   const first = 20
   const second = 23
   const result = multiy(first, second)
   const sum = add(first, second)
    return (
        <div>
            <h1>This is a Shoes</h1>
            <p>result:{result} total sum:{sum}</p>
        </div>
    );
};

export default Shoes;