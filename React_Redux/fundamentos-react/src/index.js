//Importe do CSS
import './index.css'

//Importe de React
import ReactDOM from 'react-dom'
import React from 'react'

//Importe Componentes
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={9.3} />
    </div>, 
    document.getElementById('root')
)