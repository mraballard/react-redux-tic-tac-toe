import React from 'react'

export class Square extends React.Component {
    render() {
        let value = this.props.squares[this.props.value] == null ? "" : this.props.squares[this.props.value]
        console.log(this.props)
        return (
            <button disabled={!!this.props.winner} className="square" onClick={ () => this.props.onSquareClick(this.props.playerTurn, this.props.value) }>
                { value }
            </button>
        );
    }
}