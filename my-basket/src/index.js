import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { reducer } from './redux/reducers/index.reducers';

const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>
);

