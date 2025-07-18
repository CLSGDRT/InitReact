// Dans cet exemple, nous allons utiliser le hook useRef pour stocker une valeur mutable
//  qui ne déclenche pas de re-render du composant lorsqu'elle est modifiée.
// On va également utiliser useState pour avoir une valeur à modifier qui déclenche un re-render.

import {useRef, useState} from 'react';

export default function UseRefExemple () {
  // on utilise useRef pour stocker une valeur mutable qui ne déclenche pas de re-render
  // contrairement à useState qui déclenche un re-render à chaque changement de valeur.
  const [state, setState] = useState (0);
  const count = useRef (0);


  function changeCountWithNoRender () {
    count.current++;
    console.log ('count : ', count.current);
  }

  console.log ('Mise à jour du composant');
  return (
    <div>
      <h1>Différence entre useRef et state</h1>
      <p>state : {state}</p>
      <p>count : {count.current}</p>
      {/* Le bouton ci-dessous utilise useRef, donc il ne déclenche pas de re-render du composant */}
      <button onClick={changeCountWithNoRender}>Incrémenter count</button>
      {/* Le bouton ci-dessous utilise useState, donc il déclenche un re-render du composant */}
      <button onClick={() => setState (state + 1)}>Incrémenter state</button>

    </div>
  );
}
