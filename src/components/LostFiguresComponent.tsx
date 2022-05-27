import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";

interface LostFiguresComponentProps {
    title: string;
    figures: Figure[];
    highlight: boolean;
}
const LostFiguresComponent: FC<LostFiguresComponentProps> = ({title, figures,highlight}) => {
    return (
        <div className={['lost', highlight ? 'highlight' : ''].join(' ')}>
            <h3>{title}</h3>
            {figures.map(figure =>
                <div className="lost__line" key={figure.id}>
                    {figure.name}
                    {figure.logo ? <img className="lost__img" src={figure.logo} alt={figure.name}/>
                    : ''} lost on {figure.lostMove} move
                </div>)}
        </div>
    );
};

export default LostFiguresComponent;
