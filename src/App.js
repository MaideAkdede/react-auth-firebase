import React, { useContext } from 'react';
import { MovieContext } from "./contexts/MovieContext";
import { Route, BrowserRouter, Redirect} from 'react-router-dom';

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
export default function App() {

  const [currentUser, setCurrentUser] = useContext(MovieContext)

  return (
      <BrowserRouter>

        {currentUser ?
            <Redirect
              to={{
                pathname: "/"
              }}
            />
            :
            <Redirect
                to={{
                  pathname: "/login"
                }}
            />
        }

        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/login" >
          <LoginForm />
        </Route>
      </BrowserRouter>
  )
}

