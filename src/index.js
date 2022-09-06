import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css'
import { HashRouter as Router } from 'react-router-dom'
import './App.css'
import locale from '../src/locale'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
