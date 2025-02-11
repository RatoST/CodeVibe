import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import ContactsPage from './contacts/ContactsPage';
import ManageContactPage from './contacts/ManageContactPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path ="/" component={HomePage} />
        <Route path ="/about" component={AboutPage} />
        <Route path ="/contacts" component={ContactsPage} />
        <Route path ="/contact/:slug" component={ManageContactPage} />
        <Route path ="/contact" component={ManageContactPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar/>
    </div>
  )
}

export default App;
