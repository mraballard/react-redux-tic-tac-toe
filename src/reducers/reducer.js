import { combineReducers } from 'redux'
import {PLAYER_MOVE} from "../actionTypes/actions"

const initialState = {
    squares: Array(9).fill(null)
}

const moveReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAYER_MOVE:
            return Object.assign([], state.squares, {
                [action.payload.location]: action.payload.playerSymbol
            })
    }
    return state
}

export const ticTacToe = combineReducers({
    moveReducer,
})

export default ticTacToe