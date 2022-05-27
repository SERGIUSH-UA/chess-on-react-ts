import React, {FC} from 'react';
import {Player} from "../models/Player";
import {GameState} from "../models/themes/GameState";

interface GameControlProps {
    setTime: (time: number) => void;
    setTimer: () => void;
    resign: () => void;
    time: number;
    gameEnded: boolean;
}

const GameControlComponents: FC<GameControlProps> = ({resign, setTime, time, setTimer, gameEnded}) => {



    return (
        <div>
            <div className="set__timer">
                <label className="label__timer">Enter the duration of the game: <input name="timer__input"  type="text" inputMode="numeric" pattern="[0-9]*" className="input__time" onChange={e => {
                    setTime(+e.target.value);
                }} value={time}/></label>
                <button className="btn" onClick={setTimer}>Restart game</button>
                <button className="btn" disabled={gameEnded} onClick={resign}>Resign</button>
            </div>
        </div>
    );
};

export default GameControlComponents;
