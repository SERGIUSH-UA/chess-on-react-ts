import exmplLogo from "../../assets/figures/svg/alpha/bB.svg";

export class Theme {
    name: String;
    logoBishopW: typeof exmplLogo | null;
    logoKingW: typeof exmplLogo | null;
    logoKnihtW: typeof exmplLogo | null;
    logoPawnW: typeof exmplLogo | null;
    logoQueenW: typeof exmplLogo | null;
    logoRookW: typeof exmplLogo | null;
    logoBishopB: typeof exmplLogo | null;
    logoKingB: typeof exmplLogo | null;
    logoKnihtB: typeof exmplLogo | null;
    logoPawnB: typeof exmplLogo | null;
    logoQueenB: typeof exmplLogo | null;
    logoRookB: typeof exmplLogo | null;


    constructor() {
        this.name = 'Default';
        this.logoBishopW = null;
        this.logoKingW = null;
        this.logoKnihtW = null;
        this.logoPawnW = null;
        this.logoQueenW = null;
        this.logoRookW = null;
        this.logoBishopB = null;
        this.logoKingB = null;
        this.logoKnihtB = null;
        this.logoPawnB = null;
        this.logoQueenB = null;
        this.logoRookB = null;
    }
}