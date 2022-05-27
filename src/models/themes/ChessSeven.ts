import {Theme} from "./Theme";
import logoBW from '../../assets/figures/svg/chess7/wB.svg';
import logoBB from '../../assets/figures/svg/chess7/bB.svg';
import logoQW from '../../assets/figures/svg/chess7/wQ.svg';
import logoQB from '../../assets/figures/svg/chess7/bQ.svg';
import logoKW from '../../assets/figures/svg/chess7/wK.svg';
import logoKB from '../../assets/figures/svg/chess7/bK.svg';
import logoNW from '../../assets/figures/svg/chess7/wN.svg';
import logoNB from '../../assets/figures/svg/chess7/bN.svg';
import logoPW from '../../assets/figures/svg/chess7/wP.svg';
import logoPB from '../../assets/figures/svg/chess7/bP.svg';
import logoRW from '../../assets/figures/svg/chess7/wR.svg';
import logoRB from '../../assets/figures/svg/chess7/bR.svg';

export class ChessSevenTheme extends Theme{

    constructor() {
        super();
        this.name = 'Chess Seven';
        this.logoBishopW = logoBW;
        this.logoBishopB = logoBB;
        this.logoKingB   = logoKB;
        this.logoKingW   = logoKW;
        this.logoQueenB  = logoQB;
        this.logoQueenW  = logoQW;
        this.logoKnihtB  = logoNB;
        this.logoKnihtW  = logoNW;
        this.logoRookB   = logoRB;
        this.logoRookW   = logoRW;
        this.logoPawnB   = logoPB;
        this.logoPawnW   = logoPW;
    }
}