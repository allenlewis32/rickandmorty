import axios from "axios";
import React, { useEffect, useState } from "react";

let baseUrl = 'https://rickandmortyapi.com/api';
let characterElements, setCharacterElements;
let characters = [];
let modal, setModal;

function CharacterComponent() {
    [characterElements, setCharacterElements] = useState([]);
    [modal, setModal] = useState(-1);
    useEffect(() => {
        (async () => {
            let apiUrl = baseUrl + '/character';
            let chars = [], i = 0;
            for(let character of (await axios.get(apiUrl)).data.results) {
                let id = i++;
                characters.push(character);
                chars.push(
                    <div key={id} className='card' onClick={()=>openModal(id)}>
                        <img alt={`${character.name}`} src={character.image}/>
                        <div className="cardContent">
                            <div className="closeButton">
                                <svg onClick={closeModal} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#000'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>
                            </div>
                            <h1>{character.name}</h1>
                            <span className={character.status}>{character.status}</span>
                            <table>
                                <tbody>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            }
            setCharacterElements(chars);
        })();
    }, []);
    return (
        <React.Fragment>
            {modal !== -1 && <div id='modal' className="">
                <div class='modalOpen'></div>
                <div class="modal">
                    <div class="modalCard">
                        <div className='card'>
                            <img alt={`${characters[modal].name}`} src={characters[modal].image}/>
                            <div className="cardContent">
                                <div className="closeButton">
                                    <svg onClick={closeModal} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#000'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>
                                </div>
                                <h1>{characters[modal].name}</h1>
                                <span className={characters[modal].status}>{characters[modal].status}</span>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Species</td>
                                            <td>{characters[modal].species}</td>
                                        </tr>
                                        <tr>
                                            <td>Type</td>
                                            <td>{characters[modal].type}</td>
                                        </tr>
                                        <tr>
                                            <td>Gender</td>
                                            <td>{characters[modal].gender}</td>
                                        </tr>
                                        <tr>
                                            <td>Origin</td>
                                            <td>{characters[modal].origin.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Location</td>
                                            <td>{characters[modal].location.name}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <h1>Characters</h1>
            <div className="characters">{characterElements}</div>
        </React.Fragment>
    )
}

function openModal(id) {
    setModal(id);
}

function closeModal() {
    setModal(-1);
}

export default CharacterComponent;