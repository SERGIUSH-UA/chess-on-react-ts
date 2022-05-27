import logo from '../../assets/figures/svg/alpha/bB.svg'
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import {Theme} from "../themes/Theme";
import {Pawn} from "./Pawn";

export enum FigureNames{
    FIGURE = 'FIGURE',
    KING = 'King',
    KNIGHT = 'Knight',
    PAWN = 'Pawn',
    QUEEN = 'Queen',
    ROOK = 'Rook',
    BISHOP = 'Bishop',
}

export enum FigureCode{
    FIGURE = 'F',
    KING = 'K',
    KNIGHT = 'N',
    PAWN = 'P',
    QUEEN = 'Q',
    ROOK = 'R',
    BISHOP = 'B',
}


export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;
    code: FigureCode;
    theme: Theme;
    lostMove: number;

    constructor(color: Colors, cell: Cell, theme: Theme) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
        this.code = FigureCode.FIGURE;
        this.theme = theme;
        this.lostMove = 0;
    }

    canMove(target: Cell, check: boolean): boolean {
        if (target.figure?.color === this.color){
            return false;
        }
        if(!check && target.figure?.name === FigureNames.KING){
            return false;
        }

        if(false && !check && this.name !== FigureNames.KING && this.cell.board.isKingUnderAttack(this.color)){

            if(target.figure){
                const copyFigure = target.figure;
                target.figure = null;
                if (!this.cell.board.isKingUnderAttack(this.color)){
                    target.figure = copyFigure;
                    return true;
                }
                target.figure = copyFigure;
            } else {
                new Pawn(this.color, target, this.theme);
                if (!this.cell.board.isKingUnderAttack(this.color)){
                    target.figure = null;
                    return true;
                }
                target.figure = null;
            }
            return false;
        }

        const copyFigure = this;
        const copyTargetFigure = target.figure;
        this.cell.figure = null;
        target.figure = copyFigure;
        if (this.cell.board.isKingUnderAttack(this.color)){
            this.cell.figure = copyFigure;
            target.figure = copyTargetFigure;
            return false;
        }
        this.cell.figure = copyFigure;
        target.figure = copyTargetFigure;

        return true;
    }

    moveFigure(target: Cell) {

    }
}