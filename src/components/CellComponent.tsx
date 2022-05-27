import React, {FC} from 'react';
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface CellProps{
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
    currentPlayer: Player | null;
}
const CellComponent: FC<CellProps> = ({cell, selected, click, currentPlayer}) => {
    return (
        <div onClick={() => click(cell)} className={['cell', cell.color, selected ? 'selected' : '',
        cell.available && cell.figure ? 'attacked' : '',
        cell.figure?.color !== currentPlayer?.color ? 'disabled' : ''].join(' ')}>
            {cell.available && !cell.figure && <div className="available"/>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name}/>}
        </div>
    );
};

export default CellComponent;
