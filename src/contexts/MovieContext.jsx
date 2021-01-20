import React, {useState, createContext, useEffect } from 'react';
import firebase from "../utils/firebaseConfig";

export const MovieContext = createContext();
export const MovieProvider = props => {

    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setCurrentUser)
    }, [])
    return (
        <MovieContext.Provider value={[currentUser, setCurrentUser]} >
            {props.children}
        </MovieContext.Provider>
    )
}