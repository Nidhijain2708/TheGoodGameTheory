import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [quote,setQuote]=useState(''); // let's maintain the state because we want to change the value in the div

  async function changeQuote(){
    await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(async (res)=>{
        const data=await res.json();
        // console.log(data[0]); // To check where the data is
        setQuote(data[0]); // set the quote using useState
      })
      .catch(err=>{
        console.log(err);
      })
  }

  return (
    <div className='AppComp'>
      <h1>Random Quotes</h1>
      <button onClick={changeQuote}>Show Quote</button>
      <div className='showQuote'>{quote}</div>
    </div>
  )
}

export default App;