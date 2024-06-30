import React from 'react';
import store from './13_redux的hooks/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
// import App from './03_useState/App'
// import App from './04_useEffect/App'
// import App from './04_useEffect/05_控制回调执行'
// import App from './13_redux的hooks/App'
import App from './13_redux的hooks/useSelectorHooks'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);