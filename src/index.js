import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

import TicTacToeContainer from './containers/container'
import './index.css'

render(
    <Provider store={store}>
        <TicTacToeContainer/>
    </Provider>,
    document.getElementById('root')
)