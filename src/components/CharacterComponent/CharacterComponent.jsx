import axios from "axios";
import React, { useEffect, useState } from "react";

let baseUrl = 'https://rickandmortyapi.com/api';

function CharacterComponent() {
    let [characters, setCharacters] = useState([]);
    useEffect(() => {
        (async () => {
            let apiUrl = baseUrl + '/character';
            let characters = [];
            for(let character of (await axios.get(apiUrl)).data.results) {
                characters.push(
                    <div className='card'>
                        <img alt={`${character.name}`} src={character.image}/>
                        <div className="cardContent">
                            <h1><a href={character.url}>{character.name}</a></h1>
                            <span className={character.status}>{character.status}</span>
                            <table>
                                <tr>
                                    <td>Species</td>
                                    <td>{character.species}</td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>{character.type}</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>{character.gender}</td>
                                </tr>
                                <tr>
                                    <td>Origin</td>
                                    <td>{character.origin.name}</td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>{character.location.name}</td>
                                </tr>
                            </table>
                            <span></span>
                        </div>
                    </div>
                );
            }
            setCharacters(characters);
        })();
    }, []);
    return (
        <React.Fragment>
            <h1>Characters</h1>
            <div className="characters">{characters}</div>
        </React.Fragment>
    )
}

export default CharacterComponent;