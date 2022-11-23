import React from "react"

let timer; 
let counter;
export default function AutoCounter () {
   const [ counterState, setCounter ] = React.useState(0)
  React.useEffect(() => {
   clearInterval(timer)
   timer = setInterval(() => {
      if (counterState === 60) {
         clearInterval(timer)
         return
       }
      setCounter(prev => prev+1)
      counter++
      
   },100)
  
   return () => clearInterval(timer)
  },[counterState])

  return (<div>{counterState}</div>)
}