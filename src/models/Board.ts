import {Cell} from "./Cell";
import {Colors} from "./Colors";
import {Theme} from "./themes/Theme";
import {Pawn} from "./figures/Pawn";
import {King} from "./figures/King";
import {Queen} from "./figures/Queen";
import {Bishop} from "./figures/Bishop";
import {Knight} from "./figures/Knight";
import {Rook} from "./figures/Rook";
import {Figure, FigureNames} from "./figures/Figure";
import {CardinalTheme} from "./themes/Cardinal";

export class Board {
    cells: Cell[][] = [];
    theme: Theme = new CardinalTheme();
    lostBlackFigures: Figure[] = [];
    lostWhiteFigures: Figure[] = [];


    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null)); //Black cells
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null)); //White cells
                }
            }
            this.cells.push(row);
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    public addRooks() {
        new Rook(Colors.BLACK, this.getCell(7, 0), this.theme);
        new Rook(Colors.WHITE, this.getCell(7, 7), this.theme);
        new Rook(Colors.BLACK, this.getCell(0, 0), this.theme);
        new Rook(Colors.WHITE, this.getCell(0, 7), this.theme);
    }

    public addKnights() {
        new Knight(Colors.BLACK, this.getCell(6, 0), this.theme);
        new Knight(Colors.WHITE, this.getCell(6, 7), this.theme);
        new Knight(Colors.BLACK, this.getCell(1, 0), this.theme);
        new Knight(Colors.WHITE, this.getCell(1, 7), this.theme);
    }

    public addBishops() {
        new Bishop(Colors.BLACK, this.getCell(5, 0), this.theme);
        new Bishop(Colors.WHITE, this.getCell(5, 7), this.theme);
        new Bishop(Colors.BLACK, this.getCell(2, 0), this.theme);
        new Bishop(Colors.WHITE, this.getCell(2, 7), this.theme);
    }

    public addQueens() {
        new Queen(Colors.BLACK, this.getCell(3, 0), this.theme);
        new Queen(Colors.WHITE, this.getCell(3, 7), this.theme);
    }

    public addKings() {
        new King(Colors.BLACK, this.getCell(4, 0), this.theme);
        new King(Colors.WHITE, this.getCell(4, 7), this.theme);

    }

    public addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCell(i, 1), this.theme);
            new Pawn(Colors.WHITE, this.getCell(i, 6), this.theme);
        }
    }

    public addFigures() {
        this.addRooks();
        this.addKnights();
        this.addBishops();
        this.addQueens();
        this.addKings();
        this.addPawns();
    }

    public highlightCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                target.available = !!selectedCell?.figure?.canMove(target, false);
            }
        }
    }

    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.cells = this.cells;
        newBoard.lostWhiteFigures = this.lostWhiteFigures;
        newBoard.lostBlackFigures = this.lostBlackFigures;
        return newBoard;
    }

    public getCellWithKing(color: Colors): Cell | null {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                if (target.figure && target.figure.name === FigureNames.KING
                    && target.figure.color === color) {
                    return target;
                }
            }
        }
        return null;
    }

    public isKingUnderAttack(color: Colors): boolean {
        const king = this.getCellWithKing(color);
        return king ? this.isCellUnderAttack(color, king) : false;
    }

    public isCellUnderAttack(color: Colors, cell: Cell): boolean {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                if (target.figure && target.figure.color !== color) {
                    if (target.figure.canMove(cell, true)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    isKingCanMove(color: Colors): boolean {
        const king = this.getCellWithKing(color);
        if (king) {
            for (let x = -1; x < 2; x++) {
                const scanX = king.x + x;
                if(scanX > -1 && scanX < 8){
                    for (let y = -1; y < 2; y++) {
                        const scanY = king.y + y;
                        if(scanY > -1 && scanY < 8) {
                            const target = this.getCell(scanX, scanY);
                            if (king.figure?.canMove(target, true)) {
                                    return true;
                            }
                        }
                    }
                }

            }
        }
        return false;
    }
}