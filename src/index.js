import React from 'react';
import ReactDOM from 'react-dom';
import Client from 'shopify-buy';
import './index.css';
import App from './App';

const client = Client.buildClient({
  domain: 'jvcparry.myshopify.com/',
  storefrontAccessToken: '6488f139d8c7b8de76ef7c6c45af0a2a',
});

ReactDOM.render(
  <App client={client} />,
  document.getElementById('root')
);