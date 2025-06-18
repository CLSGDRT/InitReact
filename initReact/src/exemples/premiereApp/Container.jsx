import { useState } from "react"
import ListeElement from "./ListeElement"
import Element from "./Element"
import MapElement from "./MapElement"
import imgreact from '../../assets/react.svg'


function Container() {
    const [count, setCount] = useState(0)
    const [monObjet, setObjet] = useState({
        nom: 'Initialisation',
        prenom: 'Compteur' 
    })

    function printSomething() {
        console.log('Hello World !')
    }

    function incrCount() {
        setCount(count+1)
        setObjet(prev => ({
        ...prev,
        nom: 'Plus',
        prenom: 'Que moins'
    }))
    }

    function decrCount() {
        setCount(count-1)
        setObjet(prev => ({
        ...prev,
        nom: 'Moins',
        prenom: 'Que plus'
    }))
    }

    const [state, setState] = useState('STATE INITIAL')
    const id_test = 1234

    function changeState(newValue){
        setState(newValue)
    }

    console.log('notre count =', count)

    return (
        <div>
            <h1>React Training</h1>
            <p><button className="u-btn" onClick={incrCount}>Click me !</button></p>
            <p><button className="u-btn" onClick={decrCount}>{count}</button></p>
            <p><button className="u-btn" >{monObjet.nom} {monObjet.prenom}</button></p>
            <ul>
                <ListeElement id='1' nom='Bill'></ListeElement>
                <ListeElement id='3' nom='Joe'></ListeElement>
                <p></p>
                <p>State du Container : {state}</p>
                <Element id={id_test} changeState={changeState}></Element>
            </ul>
            <ul>
                <MapElement></MapElement>
            </ul>
            <img src={imgreact} alt="" />
        </div>
    )
}
export default Container