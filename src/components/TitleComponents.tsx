import React, {FC} from 'react';
import {Player} from "../models/Player";
import {GameState} from "../models/themes/GameState";
interface TitleProps {
    currentPlayer: Player | null;
    moveCount: number;
    gameState: GameState;
    whiteTime: number;
    blackTime: number;
    gameEnded: boolean;
}

const TitleComponents: FC<TitleProps> = ({gameState,currentPlayer,
                                             gameEnded,moveCount, whiteTime, blackTime}) => {
    return (
        <div>
            <div className="title__timer">
                <div className="title__timer__left">{moveCount && <h3 className="title__current_player">
                    {gameEnded ? 'Winner player:' : 'Current player:'} {currentPlayer?.color.toUpperCase()} / Move: {moveCount}</h3>}
                    <h4>State of game: {gameState}</h4>
                </div>
                <div className="title__timer__right"><h3> White time: {whiteTime}</h3>
                    <h3> Black time: {blackTime}</h3></div></div>
        </div>
    );
};

export default TitleComponents;
