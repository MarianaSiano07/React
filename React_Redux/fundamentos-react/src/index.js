import './index.css' //Importe do CSS
import ReactDOM from 'react-dom'
import React from 'react'

const elemento = document.getElementById('root')
const tag = <strong>Olá, React!!</strong>

ReactDOM.render(<div>{tag}</div>, elemento)