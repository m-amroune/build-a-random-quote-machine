import React from 'react';
import './RandomQuotes.css'
import { useState } from 'react';
import twitter from '../Assets/icons/twitter.png'

const RandomQuotes = () => {
let quotes = [];

const [quote, setQuote] = useState({
  text: "Education is the most powerful weapon which you can use to change the world",
  author: "Nelson Mandela"
});

async function loadQuotes(){
  const response = await fetch("api/api.json");
  quotes = await response.json();
}


const random = () =>{
  const select = quotes[Math.floor(Math.random()*quotes.length)];
  setQuote(select)
}


 
  loadQuotes();
  return (
    <div id="quote-box">
      <div id="text">{quote.text}</div>
      <div id="author"> {quote.author} </div>
      <div id="new-quote"> </div>
      <a href="twitter.com/intent/tweet" id="tweet-quote">
        <img src={twitter} alt="icon twitter" /> </a>
      <button  onClick={()=> {random()} } >New quote</button>
    </div>
  )
}

export default RandomQuotes
