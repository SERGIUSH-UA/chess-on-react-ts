import {Figure, FigureCode, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import {Theme} from "../themes/Theme";

export class King extends Figure {

    constructor(color: Colors, cell: Cell, theme: Theme) {
        super(color, cell, theme);
        this.logo = color === Colors.BLACK ? theme.logoKingB : theme.logoKingW;
        this.name = FigureNames.KING;
        this.code = FigureCode.KING;
    }

    canMove(target: Cell, check:boolean): boolean {
        check = false;
        if (!super.canMove(target, check)) {
            return false;
        }
        if(Math.abs(target.x - this.cell.x) < 2 && Math.abs(target.y - this.cell.y) < 2) {
            if(this.cell.board.isCellUnderAttack(this.color, target)){
                return false;
            }
            return true;
        }
        return false;
    }
}