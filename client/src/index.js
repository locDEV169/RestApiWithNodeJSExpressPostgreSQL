import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import router-dom
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Users from './components/users/users';
import userDetail from './components/users/userDetail';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
      <Route path='/users' component={Users} exact />
      <Route path='/users/:id' component={userDetail} exact />
      </App>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);
