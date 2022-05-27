import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    endMove: () => void;
    moveCount: number;
}
const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, endMove,
                                        moveCount}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    useEffect(() => {
        highlightCells();
    }, [selectedCell]);



    function clickOnBoard(cell: Cell) {
        if(selectedCell &&  selectedCell !== cell &&
                        selectedCell.figure?.canMove(cell, false)) {
            selectedCell.moveFigure(cell, moveCount);
            endMove();
            setSelectedCell(null);
            updateBoard();
        }
        else if(cell.figure){
            if(cell.figure.color === currentPlayer?.color){
            setSelectedCell(cell);}
        }
        if(cell === selectedCell){
            setSelectedCell(null);
            updateBoard();
        }
    }
    
    function highlightCells() {
        board.highlightCells(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div>
            <div className="board">
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellComponent
                                click={clickOnBoard}
                                cell={cell}
                                key={cell.id}
                                currentPlayer={currentPlayer}
                                selected={selectedCell?.x === cell.x && selectedCell?.y === cell.y}
                            />
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>

    );
};

export default BoardComponent;
