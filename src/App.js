import React, { useContext } from 'react';
import { MovieContext } from "./contexts/MovieContext";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
export default function App() {

  const [currentUser, setCurrentUser] = useContext(MovieContext)

  return currentUser ? <Home /> : <LoginForm />
}

