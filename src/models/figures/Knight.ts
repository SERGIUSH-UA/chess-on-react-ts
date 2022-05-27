import {Figure, FigureCode, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import {Theme} from "../themes/Theme";

export class Knight extends Figure {

    constructor(color: Colors, cell: Cell, theme: Theme) {
        super(color, cell, theme);
        this.logo = color === Colors.BLACK ?  theme.logoKnihtB : theme.logoKnihtW;
        this.name = FigureNames.KNIGHT;
        this.code = FigureCode.KNIGHT;
    }

    canMove(target: Cell, check:boolean): boolean {
        if (!super.canMove(target, check)) {
            return false;
        }
        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);

        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    }

}