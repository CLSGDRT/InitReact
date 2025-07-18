import { useState, useEffect } from "react";

export default function Container () {
    const [APIState, setAPIState] = useState({
        loading: true,
        data: null,
        error: false,
    })

    useEffect (() => {
        setAPIState ({...APIState, loading: true});
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (response => {
            console.log (response);
            return response.json ();
        })
        .then (data => {
            if (data.error) {
                throw new Error ();
            }
            console.log ("Reponse de l'API", data);
            setAPIState({...APIState, loading: false, error: false, data: data});
        })
        .catch (err => {
            console.log ('bouuuuh', err);
            setAPIState({...APIState, loading: false, error: true, data: null})
        })
    }, []);

    let content = null;

    if (!!APIState.loading) {
        content = <p>Chargement...</p>
    } else if (APIState.error) {
        content = <p>Erreur lors de la récupération des données</p>
    } else {
        content =  (
            <ul>
                {APIState.data.map (user => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
            // <p>Test</p>
        );
    }
    console.log (APIState.loading)
    console.log (APIState.error)
    console.log (APIState.data)
    console.log (content)
    return (
        <div>
            <h1>Appel d'une API</h1>
            {content}
        </div>
    )
}