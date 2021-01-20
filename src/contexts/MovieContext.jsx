import React, {useState, createContext } from 'react';

export const MovieContext = createContext();
export const MovieProvider = props => {

    const [currentUser, setCurrentUser] = useState('');

    return (
        <MovieContext.Provider value={[currentUser, setCurrentUser]} >
            {props.children}
        </MovieContext.Provider>
    )
}