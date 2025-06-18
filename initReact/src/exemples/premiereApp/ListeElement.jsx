function ListeElement({id, nom}) {
    console.log(id, nom)
    return (
        <li className="text-success">Élément de la liste {nom}</li>
    )
}

export default ListeElement