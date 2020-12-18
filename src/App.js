// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';

// Components
import Welcome from './components/Welcome';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const PrivateRoute = ({component: Component, ...rest}) => {
  const user = localStorage.getItem('jwtToke');
  return <Route {...rest} render={(props) => {
    return user ? <Component {...rest} {...props}/> : <Redirect to="/login"/>
  }}/>
}


function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffec(() => {
    let token;

    // if there is no token in localStorage, then the user is in authenticated
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false)
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'))
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
    }
  }, [])

  const nowCurrentUser = () => {
    console.log('nowCurrentUser is here...');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if(localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false)
    }
  }

  return (
    <div className="App">
        <Navbar handleLogout={handleLogout} isAuth={isAuthenticated}/>
        <Welcome />
    </div>
  );
}

export default App;
