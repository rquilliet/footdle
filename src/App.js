import { useEffect, useState } from 'react';
import Wordle from './components/Wordle';
import './App.css'

 
function App() {
  const [solution, setSolution] = useState(null)
  const [solutions, setSolutions] = useState(null)

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/lqdlf.herokuapp.com/names/easy')
      .then(res => res.json())
      .then(json => {
        const solutions=json['result']
        const randomSolution=solutions[Math.floor(Math.random()*json['result'].length)]
        setSolution(randomSolution)
        setSolutions(solutions)
      })
      }, [setSolution, setSolutions])
    
  return (
    <div className="App">
      <h1>Footdle</h1>
      {solution && <Wordle solution={solution} solutions={solutions}/>}
    </div>
  );
}

export default App