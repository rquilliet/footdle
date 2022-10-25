import React from 'react'

export default function Row({guess,currentGuess,solution}) {

    if (guess){
        return (
            <div className="row past">
               {guess.map((l,i) => (
                    <div key={i} className={l.color}>{l.key}</div>
               )
               )} 
            </div>
        )

    }

    if (currentGuess){
        let letters = currentGuess.split('')
        return (
            <div className='row current'>
                {letters.map((letter, i) => (
                    <div key ={i} className='filled'>{letter}</div>
                )
                )}
                {[...Array(solution.length-letters.length)].map((v,i) => (
                    <div key={i}></div>

                ))}
            </div>
        )

    }

    const getNumberofLetters = (count) => {
        const arr = []
        for(let i= 0; i<count; i++){
          arr.push(<div key={i+1000}></div>)
        }
        return arr;
      }

  return (
    <div className ="row">
        {getNumberofLetters(solution.length)}
    </div>
  )
}
