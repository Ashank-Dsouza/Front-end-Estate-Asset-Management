import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TransferSessionDataAcrossTabs } from './utility/SessionStorageManager';
import { CssBaseline } from "@material-ui/core";

TransferSessionDataAcrossTabs();

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
