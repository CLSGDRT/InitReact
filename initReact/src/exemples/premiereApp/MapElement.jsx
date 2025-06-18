import SimpleElement from "./SimpleElement"

export default function MapElement() {
    const personnes = [
        {id:0 , nom:'aaa', age:40},
        {id:1 , nom:'bbb', age:35},
        {id:2 , nom:'ccc', age:42},
        {id:3 , nom:'ddd', age:33},
    ]

    return (
    <div>
        {personnes.map((personne, index) => {
            return <SimpleElement key={index} id={personne.id} nom={personne.nom}></SimpleElement>
        })}
    </div>
    )
}
