import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Country from './Country';
import Navbar from './Navbar';

const NatMain = () => {
    const [countries, setCountries] = useState([])
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() =>{
fetch('https://restcountries.eu/rest/v2/all')
.then(res =>res.json())
.then(data =>setCountries(data))
.then(error =>console.log(error))
  },[])

  const handleCountry=(addCountry) => {
    const newCountry = [...cart,addCountry] 
setCart(newCountry)
  }
    return (
        <div className="container">
          <div className="row">
            <Navbar></Navbar>
            <input type="text" placeholder="search.." onChange={(event) =>{setSearch(event.target.value)}}/>
              <h3>{countries.length}</h3>
      {/* <h4>{cart.length}</h4> */}
      <Cart cart={cart}></Cart>
      <div className="row">
      {
       countries.filter(country=>{
         if(search == ""){
           return country
         } else if (country.name.toLowerCase().includes(search.toLowerCase())){
           return country
         }
       }).map(country => <Country country={country} handleCountry={handleCountry} key={country.alpha3Code}></Country> )
     }
      </div>
      
     <div style={{ marginBottom:'1px solid gray'}}></div>
        </div>
        </div>
    );
};

export default NatMain;