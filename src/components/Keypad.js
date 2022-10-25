import React from 'react'
import { LETTERS } from '../lib/letters'

export default function Keypad({usedKeys}) {
  return (
    <div className='keypad'>
      {LETTERS.map((l) => {
        const color = usedKeys[l.key]

        return (
          <div key={l.key} className={color}>{l.key}</div>
        )
      })}
    </div>
  )
}
