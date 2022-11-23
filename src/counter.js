import React, { useState } from "react";
import SearchBar from './searchBar'
  
// Importing app.css is css file to add styling
import "./App.css";
  
export default function Counter () {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0)
  const [isShown, setIsShown] = useState(false)
  
  const showSearchBar = event => {
    setIsShown(true);
  }
  
  // Function is called everytime increment button is clicked
     
  const handleClick1 = () => {
    // Counter state is incremented
    if (counter === 10){
        alert("Well done!!! You've reached 10")
        {isShown && <SearchBar />}
        return
    }
    setCounter(counter + 1)
  }
  
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    if (counter === 0) {
        alert("Cannot go negative")
        return
    }
    else {
        setCounter(counter - 1)
    }
    
  }
  
  return (
    <div>
      <div>
        {counter}
      </div>
      <div className="buttons">
        <button onClick={handleClick2}>-</button>
        <button onClick={handleClick1}>+</button>
      </div>
    </div>
  )
}
