import { connect } from 'react-redux'
import { Game } from '../components/game.js'

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const TicTacToeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Game)

export default TicTacToeContainer