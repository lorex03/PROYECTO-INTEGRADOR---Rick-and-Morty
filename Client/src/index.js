import React from 'react'
import './index.css'
import App from './App'

import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux'
import store from './components/redux/store'
import{createRoot} from 'react-dom'

   createRoot(document.getElementById('root')).render(
   <Provider store ={store}>
    <BrowserRouter>
   <App />
   </BrowserRouter> ,
   </Provider>
)

