import React, { useEffect, useState } from 'react'
import "antd/dist/antd.css";
import { notification } from 'antd';

import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

const ALERTS = {
    "isNotEnoughLetters": "Pas assez de lettres !",
    "isWordAlreadyTried": "Déjà essayé",
    "isWordNotAPlayer": "Pas un joueur !",
}
 
 export default function Wordle({solution, solutions}){
    const {
        currentGuess,
        handleKeyup,
        guesses,
        isCorrect,
        turn,
        usedKeys,
        isNotEnoughLetters,
        isWordAlreadyTried,
        isWordNotAPlayer
    } = useWordle(solution, solutions)

    console.log("isNotEnoughLetters", isNotEnoughLetters)
    console.log("isWordAlreadyTried", isWordAlreadyTried)
    console.log("isWordNotAPlayer", isWordNotAPlayer)

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        if (isCorrect) {
            setTimeout(() => setShowModal(true),2000)
            window.removeEventListener('keyup', handleKeyup)
        }
        
        if (turn>5 && !isCorrect) {
            setTimeout(() => setShowModal(true),2000)
            window.removeEventListener('keyup', handleKeyup)

        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

    useEffect(() => {
        console.log(solution, guesses, turn, isCorrect, isNotEnoughLetters)
    }, [solution, guesses, turn, isCorrect, isNotEnoughLetters])

    useEffect(() => {
        if (isNotEnoughLetters || isWordAlreadyTried || isWordNotAPlayer) {
            const key = isNotEnoughLetters ? "isNotEnoughLetters" : isWordAlreadyTried ? "isWordAlreadyTried" : isWordNotAPlayer ? "isWordNotAPlayer" : ""
            notification.open({ message: ALERTS[key] });
        }
    }, [isNotEnoughLetters, isWordAlreadyTried, isWordNotAPlayer])

   return (
    
    <div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} solution={solution}/>
        <Keypad usedKeys={usedKeys}/>
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
   )
 }
 