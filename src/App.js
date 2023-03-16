import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [feedback, setFeedback] = useState("");
  const [keyValue, setKeyValue] = useState("");
  const [bookName, setBookName] = useState("");
  const [click, setClick] = useState(false);

  const handleClick = async () => {
    const res = await axios.post("http://localhost:8081/predict", {
      feedback: keyValue,
    });
    setFeedback(res.data);
    setClick(true);
  };

  return (
    <>
      <div className=" h-screen w-screen flex justify-center items-center flex-col">
        <div>
          <h1 className="text-4xl font-serif text-purple-600 font-medium max-w-[30rem] text-center">
            Hello, Welcome to GoodRead books reviews
          </h1>
        </div>
        {!click ? (
          <div className="flex items-center flex-col">
            <div className="flex mt-8 flex-col ">
              <span className="text-sm font-sans text-gray-600 font-bold">
                Book Name:
              </span>
              <input
                placeholder="Enter book name"
                className="py-1 px-3 border-2 border-gray-300 w-[20rem]  rounded-md focus:outline-none"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
              />
            </div>
            <div className="flex mt-4 flex-col ">
              <span className="text-sm font-sans text-gray-600 font-bold">
                Feedback:
              </span>
              <textarea
                placeholder="Please add your feedback"
                className="py-1 px-3 border-2 border-gray-300 w-[20rem]  rounded-md focus:outline-none"
                value={keyValue}
                onChange={(e) => setKeyValue(e.target.value)}
              />
            </div>
            <button
              onClick={handleClick}
              className="py-2 px-8 bg-purple-600 hover:brightness-90 mt-2 rounded-lg text-white font-bold"
            >
              Enter
            </button>
          </div>
        ) : (
          <div className="border border-gray-300 rounded-lg flex items-center flex-col mt-8 p-12">
            <h1 className="text-xl font-mono font-bold">
              Your rating for the
              <span className="text-purple-600"> {bookName}</span>
            </h1>
            <h1 className="mt-2 text-4xl">
              <span className="text-red-500">{feedback} stars</span> out of 5
            </h1>
            <button
              onClick={() => {
                setBookName("");
                setFeedback("");
                setKeyValue("");
                setClick(false);
              }}
              className="py-2 px-8 bg-purple-600 hover:brightness-90 mt-2 rounded-lg text-white font-bold"
            >
              Ok
            </button>
          </div>
        )}
      </div>

      {/* <div className="flex flex-col">
        <input
          placeholder="Enter your feedback"
          value={keyValue}
          onChange={(e) => setKeyValue(e.target.value)}
        />
        <button onClick={handleClick}> Submit</button>
      </div>
      <h1>{feedback}</h1> */}
    </>
  );
}

export default App;
