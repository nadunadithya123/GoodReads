import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [feedback, setFeedback] = useState('')
  const [keyValue, setKeyValue] = useState('')
  
  const handleClick = async () => {
    const res =await axios.post('http://localhost:8081/predict',{
    feedback:keyValue
  })
  console.log("res",res)
  setFeedback(res.data)
  }

  return (
    <div className="App">

<div style={{display:"flex", flexDirection:"column"}}>
      <input placeholder='Enter your feedback' value={keyValue} onChange={((e) => setKeyValue(e.target.value) ) }/>
      <button onClick={handleClick}> Submit</button>

      </div>
      <h1>{feedback}</h1>
      
    </div>
  );
}

export default App;
