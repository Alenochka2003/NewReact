import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MathComponent from './GameQZ/Math'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MathComponent />
  </React.StrictMode>
);