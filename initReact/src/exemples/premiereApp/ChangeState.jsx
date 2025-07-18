// Dans cet exemple, nous allons utiliser le hook useState pour gérer l'état d'un compteur et d'un objet.
// Le compteur sera incrémenté à chaque clic sur un bouton

import { useState } from 'react'

export default function ChangeState() {
  // Utilisation de useState pour gérer l'état du compteur et de l'objet
  const [count, setCount] = useState(0)
  const [monObjet, setMonObjet] = useState({
    nom: 'test',
    prenom: 'test2'
  })
  function doSomething() {
    console.log('on incrément le compteur')
    setCount(count + 1)
  }
  console.log('notre count', count)
  console.log('notre objet', monObjet)

  return (
    <div>
      <p>
        Notre state est : {count} <br />
        Notre objet est : {monObjet.nom} {monObjet.prenom}
      </p>

      <button className='btn btn-primary' onClick={doSomething}> Incrémenter le compteur </button>
    </div>
  );
}
