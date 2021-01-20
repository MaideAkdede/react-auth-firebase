import React, {useState, useContext} from 'react';
import firebase from "../utils/firebaseConfig";
import { MovieContext } from "../contexts/MovieContext";

export default function LoginForm() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useContext(MovieContext);

    const handleSubmit = e => {
        //Éviter rechargement de la page
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(mail, password)
            .then((userFb) => {
                //Sign In
                setCurrentUser(userFb.user);
                //setCurrentUser(userFb.user);
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    //A F F I C H A G E
    return(
        <form onSubmit={handleSubmit} >
            <label htmlFor="email">Email</label>
            <input type="email"
                   name="email"
                   id="email"
                   onChange={e => setMail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password"
                   name="password"
                   id="password"
                   onChange={e => setPassword(e.target.value)}/>
            <input type="submit" />
        </form>
    )
}