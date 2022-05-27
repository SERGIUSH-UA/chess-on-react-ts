import {Figure, FigureCode, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import {Theme} from "../themes/Theme";

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell, theme: Theme) {
        super(color, cell, theme);
        this.logo = color === Colors.BLACK ? theme.logoBishopB : theme.logoBishopW;
        this.name = FigureNames.BISHOP;
        this.code = FigureCode.BISHOP;
    }

    canMove(target: Cell, check:boolean ): boolean {
        if (!super.canMove(target, check)) {
            return false;
        }
        if(this.cell.isEmptyDiagonal(target)){
            return true;
        }
        return false;
    }
}