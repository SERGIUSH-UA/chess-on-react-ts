import {Figure, FigureCode, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import {Theme} from "../themes/Theme";

export class Pawn extends Figure {

    isFirstStep: boolean = true;

    constructor(color: Colors, cell: Cell, theme: Theme) {
        super(color, cell, theme);
        this.logo = color === Colors.BLACK ?  theme.logoPawnB : theme.logoPawnW;
        this.name = FigureNames.PAWN;
        this.code = FigureCode.PAWN;
    }

    canMove(target: Cell, check:boolean): boolean {
        if (!super.canMove(target, check)) {
            return false;
        }
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

        if( (target.y === this.cell.y + direction || this.isFirstStep &&
            ((target.y === this.cell.y + firstStepDirection)
                && this.cell.board.getCell(target.x, target.y - direction).isEmpty()))
            && target.x === this.cell.x
            && this.cell.board.getCell(target.x, target.y).isEmpty()){
            return true;
        }

        if((target.y === this.cell.y + direction)
        && (target.x === this.cell.x -1 || target.x === this.cell.x + 1)
        && this.cell.isEnemy(target)){
            return true;
        }

        return false;
    }

    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.isFirstStep = false;
    }
}