import {Theme} from "./Theme";
import logoBW from '../../assets/figures/svg/fresca/wB.svg';
import logoBB from '../../assets/figures/svg/fresca/bB.svg';
import logoQW from '../../assets/figures/svg/fresca/wQ.svg';
import logoQB from '../../assets/figures/svg/fresca/bQ.svg';
import logoKW from '../../assets/figures/svg/fresca/wK.svg';
import logoKB from '../../assets/figures/svg/fresca/bK.svg';
import logoNW from '../../assets/figures/svg/fresca/wN.svg';
import logoNB from '../../assets/figures/svg/fresca/bN.svg';
import logoPW from '../../assets/figures/svg/fresca/wP.svg';
import logoPB from '../../assets/figures/svg/fresca/bP.svg';
import logoRW from '../../assets/figures/svg/fresca/wR.svg';
import logoRB from '../../assets/figures/svg/fresca/bR.svg';

export class FrescaTheme extends Theme{
    constructor() {
        super();
        this.name = 'fresca';
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