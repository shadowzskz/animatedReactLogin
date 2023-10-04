import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Switcher from './components/pages/login/swticher/Switcher';
import Dashboard from './components/pages/dashboard/Dashboard';
import ForgotPassword from './components/pages/login/forgetpassword/ForgotPassword';
import UpdateProfile from './components/pages/login/updateProfile/UpdateProfile';
import Error from './components/pages/Error/Error'
import { useStateValue } from './context/StateProvider';
import auth from './components/firebase/firebase';

import './App.scss';


function App() {

  const [{ user }, dispatch] = useStateValue();
  const loggeed = {};

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //User is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    });

    return () => {
      //Clean Up  operation or listner
      unSubscribe();
    }
    
    
  }, [])

  return (
    <Router>
      <div className="app">
      <Switch>
        <Route exact="/">
          { (user?.email) ? <Dashboard /> : <Switcher /> } 
        </Route>
        <Route exact path="/dashboard">
          { (user?.email) ? <Dashboard /> : <Switch/> }
        </Route>
        <Route  path="/update">
        { (user?.email) ? <UpdateProfile /> : <Switch/> }
        </Route>
        <Route  path="/error">
        { (user?.email) ? <Error /> : <Switch/> }
        </Route>
        <Route  path="/sign" component={Switcher} />
        <Route path="/forgot" component={ForgotPassword} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
