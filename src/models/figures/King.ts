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

    canMove(target: Cell, check: boolean): boolean {
        check = false;
        if (!super.canMove(target, check)) {
            return false;
        }
        if (Math.abs(target.x - this.cell.x) < 2 && Math.abs(target.y - this.cell.y) < 2) {
            const copyKing = this;
            this.cell.figure = null;
            if (this.cell.board.isCellUnderAttack(this.color, target)) {
                copyKing.cell.figure = copyKing;
                return false;
            }
            copyKing.cell.figure = copyKing;

            const protectedZone = this.cell.board.getKingProtectedZone(this.color === Colors.WHITE
                ? Colors.BLACK : Colors.WHITE);
            for (const protect of protectedZone) {
                if (target.x === protect.x && target.y === protect.y) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}