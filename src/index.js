
  import React from 'react';
  import ReactDom from 'react-dom/client';
  import App from './App';
  const root = ReactDom.createRoot(document.getElementById('root'));
  root.render( 
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );