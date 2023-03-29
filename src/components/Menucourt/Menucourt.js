import React from 'react';
import { menuCourt } from '../Utilities/Calculate';

const Menucourt = () => {
    const first = 70
    const second = 30
    const allResult = menuCourt(first, second)
    return (
        <div>
            <h1>How to Menucourt:</h1>
            <h4>allResult:{allResult}</h4>
        </div>
    );
};

export default Menucourt;