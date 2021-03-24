import React, { useState } from 'react';

const Cart = ({ cart }) => {
    
  
    const ttlPopul = cart.reduce((acc, country) => acc + country.population, 0)
    
    return (
        <div>
            <h4>{cart.length}</h4>
            <p>{ttlPopul}</p>
            <div style={{ display: 'flex', marginLeft: '10px' }}>
                {
                    cart.map(inf => <p style={{ marginLeft: '10px', color: 'gray', fontSize: '15px', fontWeight: '300', display: 'flex' }}>
                        {inf.borders.map(hg => <p style={{ marginLeft: '3px', color: 'pink' }}>{hg}, </p>)}</p>)
                }
            </div>
           

        </div>
    );
};

export default Cart;