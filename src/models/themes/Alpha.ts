import {Theme} from "./Theme";
import logoBW from '../../assets/figures/svg/alpha/wB.svg';
import logoBB from '../../assets/figures/svg/alpha/bB.svg';
import logoQW from '../../assets/figures/svg/alpha/wQ.svg';
import logoQB from '../../assets/figures/svg/alpha/bQ.svg';
import logoKW from '../../assets/figures/svg/alpha/wK.svg';
import logoKB from '../../assets/figures/svg/alpha/bK.svg';
import logoNW from '../../assets/figures/svg/alpha/wN.svg';
import logoNB from '../../assets/figures/svg/alpha/bN.svg';
import logoPW from '../../assets/figures/svg/alpha/wP.svg';
import logoPB from '../../assets/figures/svg/alpha/bP.svg';
import logoRW from '../../assets/figures/svg/alpha/wR.svg';
import logoRB from '../../assets/figures/svg/alpha/bR.svg';

export class AlphaTheme extends Theme{

    constructor() {
        super();
        this.name = 'Alpha';
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