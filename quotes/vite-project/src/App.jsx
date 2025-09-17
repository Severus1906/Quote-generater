import React from 'react'
import './App.css'
import logo  from './logo.png'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { quotes } from './quote.js'

function App() {

  const [index, setIndex] = React.useState(0);

  const showPreviousQuote = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }
  const showNextQuote = () => {
    if(index < quotes.length - 1){
      setIndex(index + 1);
    }
  }

  return (
    <>
    <header>
      <img src={logo} alt="" />
      <h1>Quotes Generater</h1>
    </header>
    <main>
        <h1>Word of the day</h1>
        <p>{quotes[index].text}</p>
        <p className='author'>{quotes[index].author}</p>
        <div>
          <button onClick={showPreviousQuote}> Previous Quote</button>
          <button onClick={showNextQuote}>Next Quote</button>
        </div>
    </main>
     <footer>
        <p>Made by Faiz 💖</p>
        &copy; 2025 All rights reserved.
            <a style={{color: "#1877F2"}} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={25} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={25} />
            </a>
            <a style={{color: '#E1306C'}} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} />
            </a>
     </footer>
    </>
  )
}
export default App
