import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.css"
import {
  BrowserRouter,
} from "react-router-dom";

import { store } from './app/store'
import { Provider } from 'react-redux'

//npm ci && npm run build

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>

  </React.StrictMode>,
)
