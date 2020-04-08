import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import App from './App';
import AllContacts from './components/AllContacts';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Details from './components/Details';
import Layout from './components/Layout';
import Login from "./components/Login";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path='/' render={() => <Login></Login>} />
      <Route path='/home' render={() => <Layout><App> <AllContacts /></App></Layout>} />
      <Route path='/new' render={() => <Layout><App><AddContact /></App></Layout>} />
      <Route path='/favourites' render={() => <Layout><App></App></Layout>} />
      <Route path='/all' render={() => <Layout><App><ContactList/></App></Layout>} />
      <Route path='/details' render={() => <Layout><App><Details /></App></Layout>} />
      <Route path='/manage-data' render={() => <Layout><App></App></Layout>} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
