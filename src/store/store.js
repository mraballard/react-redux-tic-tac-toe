import { createStore } from 'redux';

import { ticTacToe } from '../reducers/reducer'

export const store = createStore(ticTacToe)
