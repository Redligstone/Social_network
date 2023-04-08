import store from './redux/redux_store'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App state={store.getState()}  store={store} dispatch={store.dispatch.bind(store)} />
      </Provider>
    </React.StrictMode>
  );
  
  reportWebVitals();
 }

 rerenderEntireTree(store.getState())
 store.subscribe(()=>{
  let state = store.getState();
  rerenderEntireTree(state)
 })
 

