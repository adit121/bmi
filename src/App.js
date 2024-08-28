import React,{useMemo, useState} from 'react'
import './App.css'
const App = () => {
  const [Weight,setWeight] = useState(80)
  const[height , setHeight] = useState(170)
  const output = useMemo(()=>{
   let heightt = height/100
   let BMI = Weight/(heightt*heightt)
   return BMI.toFixed(1)
  })

  return (
    <main>
      <h1> BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {Weight} kgs</p>
        <input className='input-slider' type = 'range' 
        step='1' min='40' max='200' onChange={(e)=>setWeight(e.target.value)} />

        <p className='slider-output'>Height: {height} cm</p>
        <input className='input-slider' type = 'range' 
        onChange={(e)=>setHeight(e.target.value)}  min='140' max='220' />
      </div>
      <div className='output-section'> 
        <p>Your BMI is</p>
        <p className='output'>{output}</p>
      </div>
        
    </main>
  )
}

export default App
