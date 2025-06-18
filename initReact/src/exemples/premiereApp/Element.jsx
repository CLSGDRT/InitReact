export default function Element({id, changeState}) {
  return (
    <div>
        <p>Element {id}</p>
        <p><button onClick={() => changeState('Nouveau label')}>Changer le state</button></p>
        <p><button onClick={() => changeState('STATE INITIAL')}>State initial</button></p>
    </div>
  )
}
