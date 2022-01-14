import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import {state} from "./app/redux";

ReactDOM.render(
  <Router>
      <React.StrictMode>
      <Provider store={state}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
