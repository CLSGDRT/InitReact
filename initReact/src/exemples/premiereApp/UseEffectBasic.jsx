import { useEffect, useState } from "react";

function UseEffectBasic () {
    const [count, setCount] = useState (0);
    useEffect(() => { console.log('Apres la premiere mise a jour du DOM'); }, []);
    useEffect(() => { console.log('Apres chaque mise a jour du DOM'); });
    useEffect(() => { console.log('Des que le compteur change'); }, [count]);
    return (
        <h1>
            Le hook UseEffect
            <p>
            <button onClick={() => setCount(count+1)}>
                Compteur : {count}
            </button>
            </p>
        </h1>
    )
}

export default UseEffectBasic;