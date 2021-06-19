import React from 'react';
import Login from './components/loginComponent';
import Dashboard from './components/weatherDashboardComponent';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
     <Switch>
     <Route path='/' exact>
       <Login/>
     </Route>
      <Route path='/dashboard'>
      <Dashboard/>
      </Route>
     </Switch>
  );
}

export default App;
