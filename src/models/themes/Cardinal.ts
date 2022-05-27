import {Theme} from "./Theme";
import logoBW from '../../assets/figures/svg/cardinal/wB.svg';
import logoBB from '../../assets/figures/svg/cardinal/bB.svg';
import logoQW from '../../assets/figures/svg/cardinal/wQ.svg';
import logoQB from '../../assets/figures/svg/cardinal/bQ.svg';
import logoKW from '../../assets/figures/svg/cardinal/wK.svg';
import logoKB from '../../assets/figures/svg/cardinal/bK.svg';
import logoNW from '../../assets/figures/svg/cardinal/wN.svg';
import logoNB from '../../assets/figures/svg/cardinal/bN.svg';
import logoPW from '../../assets/figures/svg/cardinal/wP.svg';
import logoPB from '../../assets/figures/svg/cardinal/bP.svg';
import logoRW from '../../assets/figures/svg/cardinal/wR.svg';
import logoRB from '../../assets/figures/svg/cardinal/bR.svg';

export class CardinalTheme extends Theme{
    constructor() {
        super();
        this.name = 'cardinal';
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