import {Figure, FigureCode, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import {Theme} from "../themes/Theme";

export class Queen extends Figure {

    constructor(color: Colors, cell: Cell, theme: Theme) {
        super(color, cell, theme);
        this.logo = color === Colors.BLACK ?  theme.logoQueenB : theme.logoQueenW;
        this.name = FigureNames.QUEEN;
        this.code = FigureCode.QUEEN;
    }

    canMove(target: Cell, check:boolean): boolean {
        if (!super.canMove(target, check)) {
            return false;
        }
        if(this.cell.isEmptyVertical(target)){
            return true;
        }
        if(this.cell.isEmptyHorizontal(target)){
            return true;
        }
        if(this.cell.isEmptyDiagonal(target)){
            return true;
        }
        return false;
    }
}