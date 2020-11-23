import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useMediaQuery } from 'react-responsive';
import MobileNotice from './MobileNotice';

function App() {
  const [{ user }, dispatch] = useStateValue();
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-width: 750px)'
  })
  return (
    isTabletOrMobileDevice ? <MobileNotice /> :
      <div className="app">
        {!user ? (
          <Login />
        ) : (
            <div className="app__body">
              <Router basename="/">
                <Sidebar />
                <Switch>
                  <Route path="/rooms/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/" />
                </Switch>
              </Router>
            </div>)}

      </div>
  );
}

export default App;
