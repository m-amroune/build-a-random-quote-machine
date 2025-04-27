import React from 'react';
import './RandomQuotes.css'
import { useState } from 'react';

const RandomQuotes = () => {
  const [quote, setQuote] = useState({
    text: "Education is the most powerful weapon which you can use to change the world",
    author: "Nelson Mandela"
  });
  return (
    <div>
      
    </div>
  )
}

export default RandomQuotes
