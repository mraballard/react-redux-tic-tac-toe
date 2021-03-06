import React from 'react';
import {Square} from "./square";

export class Board extends React.Component {
    renderSquare(i) {
        return <Square {...this.props} value={i}/>;
    }

    renderResetButton() {
        return this.props.winner ? <button id="reset-button" onClick={this.props.resetBoard}>Reset board</button>
            : null
    }

    render() {
        const status = (this.props.winner !== null) ? `Winner: ${this.props.winner}` : `Next player: ${this.props.playerTurn}`;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                {this.renderResetButton()}
            </div>
        );
    }
}