import { useEffect, useState } from 'react';

import Wordle from './components/Wordle';
import './App.css'

export default function App() {
  const [solution, setSolution] = useState(null)
  const [solutions, setSolutions] = useState(null)

  useEffect(() => {
    fetch('https://lqdlf.herokuapp.com/names/')
      .then(res => res.json())
      .then(json => {
        const solutions=json['result']
        setSolutions(solutions)
      })
      },
    [setSolutions]
  )

  useEffect(() => {
    fetch('https://lqdlf.herokuapp.com/name/easy')
      .then(res => res.json())
      .then(json => {
        const randomSolution=json['result']
        setSolution(randomSolution)
      })
      },
    [setSolution]
  )
    
  return (
    <div className="App">
      <h1>Footdle</h1>
      {solution && <Wordle solution={solution} solutions={solutions}/>}
    </div>
  );
}