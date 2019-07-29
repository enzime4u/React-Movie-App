import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Navigation from '../components/Navigation'


const AppRouter = () => (
  <Router>
      <div>
        <Navigation />
        <HomePage />
      </div>
  </Router>
);


export default AppRouter;