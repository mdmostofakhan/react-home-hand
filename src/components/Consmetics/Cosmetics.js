import React from 'react';
import { add } from '../Utilities/Calculate';
// import add from '../Utilities/Calculate';

const Cosmetics = () => {
    const first = 64;
    const second = 63;
    const total = add(first, second)

    return (
        <div>
            <h1>Welcome to the Cosmetics</h1>
            <p>total:{total}</p>
        </div>
    );
};

export default Cosmetics;