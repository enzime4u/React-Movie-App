import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppRouter from './routers/AppRouter'

const App = () => (
  <AppRouter />
)

export default App;
