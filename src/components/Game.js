import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helper';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xNext, setXNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xo = xNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const cells = [...current];

        if (winner || cells[i]) {
            return;
        }
        else {
            cells[i] = xo;
        }

        setHistory([...historyPoint, cells]);
        setStepNumber(historyPoint.length);
        setXNext(!xNext);
    }

    const renderMoves = () => {
        history.map((step, move) => {
            const destination = move ? `Go to move #${move}` : `Go to start`;
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>
                        {destination}
                    </button>
                </li>
            )
        });
    }

    const jumpTo = (step) => {
        setStepNumber(step);
        setXNext(step % 2 === 0);
    }

    return (
        <>
            <h1> React tic-tac-toe with hooks</h1>
            <Board 
                cells={history[stepNumber]} 
                onClick={handleClick}
            />
            <div>
                <h3>
                    History
                </h3>
                {renderMoves()}
            </div>
            <h3>
                { winner ? "Winner is " + winner : "Next player: " + xo }
            </h3>
        </>
    )
}

export default Game;