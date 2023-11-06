import './App.css';
import React, { useState } from 'react';
function App() {
  const [inputvalue, setInputValue] = useState('');
  const [count, setCount] = useState(0)

  const handleinputchange = (e) => {
    const text = e.target.value;
    setInputValue(text)

    // words count
    const words = text.trim();
    setCount(words.length)
  }
  const handleCount = () => {
    setCount('');
    setInputValue('')
  }
  return (
    <div className="letterContainer">
      <div className="letterparent">
        <div className="letterDetails">
          <h1 className='heading'>Calculate the Letters You enter</h1>
          <p>Enter the Phrase</p>
          <input type="text" placholder="enter something......." value={inputvalue} onChange={handleinputchange} className='letters-input ' />
          <button className='letters-count' onClick={handleCount}>No.of.letters:{count}</button>
        </div>
        <div className='image-section'>
          <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" alt="letter-logo" className="letter-logo" />
        </div>
      </div>
    </div>
  );
}

export default App;


