import './index.css' //Importe do CSS
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro' //Componente

ReactDOM.render(
    <div>
        <Primeiro>image.png</Primeiro>
    </div>, 
    document.getElementById('root')
)