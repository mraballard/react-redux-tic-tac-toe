import { connect } from 'react-redux'
import { Game } from '../components/game.js'
import {playerMove, resetBoard} from "../actionCreators/creators"
import { calculateWinner } from "../selectors/selector";

const mapStateToProps = (state, ownProps) => {
    return {
        squares: state.moveReducer.squares,
        playerTurn: state.moveReducer.playerTurn,
        winner: calculateWinner(state.moveReducer.squares),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSquareClick: (playerSymbol, index) => {
            dispatch(playerMove(playerSymbol, index))
        },
        resetBoard: () => {
            dispatch(resetBoard())
        }
    }
}

const TicTacToeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Game)

export default TicTacToeContainer