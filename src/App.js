import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [feedback, setFeedback] = useState('')
  const [keyValue, setKeyValue] = useState('')
  useEffect(() => {

    const getResponse = async () => {
      const res =await axios.post('http://localhost:8081/predict',{
      feedback:keyValue
    })
    console.log("res",res)
    setFeedback(res.data)
    }
    setTimeout(() => {
      if(keyValue.length > 6)
          getResponse()

    },3000)
  },[keyValue])
  return (
    <div className="App">
      <input placeholder='Enter your feedback' value={keyValue} onChange={((e) => setKeyValue(e.target.value) ) }/>
      <h1>{feedback}</h1>
    </div>
  );
}

export default App;
