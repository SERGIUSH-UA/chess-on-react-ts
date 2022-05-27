import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";
import {GameState} from "../models/themes/GameState";
import TitleComponents from "./TitleComponents";
import GameControlComponents from "./GameControlComponents";

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
    moveCount: number;
    gameState: GameState;
    setGameState: (gameState: GameState) => void;
    gameEnded: boolean;
    resign:  () => void;
    setWinner:  (color: Colors) => void;
}
const TimerComponents: FC<TimerProps> = ({setWinner, currentPlayer, setGameState, gameEnded, resign,
                                             restart, moveCount, gameState}) => {

    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    const [time, setTime] = useState (300);

    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        if (gameEnded && timer.current){
            clearInterval(timer.current);
        } else {
            startTimer();
        }
    }, [currentPlayer, gameEnded]);

    useEffect(() => {
        if(whiteTime < 1){
            setGameState(GameState.WIN_ON_TIME);
            setWinner(Colors.BLACK);
        }else if(blackTime < 1){
            setGameState(GameState.WIN_ON_TIME);
            setWinner(Colors.WHITE);
        }}
    , [blackTime, whiteTime]);


    function setTimer() {
        setBlackTime(time);
        setWhiteTime(time);
        restart();
    }
    
    function startTimer() {
        if (timer.current){
            clearInterval(timer.current);
        }
        const callback = currentPlayer?.color === Colors.WHITE
            ? decrementWhiteTimer : decrementBlackTimer;

        timer.current = setInterval(callback, 1000)
    }
    
    function decrementWhiteTimer(){
        setWhiteTime(prevState => prevState -1);
    }

    function decrementBlackTimer(){
        setBlackTime(prevState => prevState -1);
    }

    return (
        <div className={['timer', gameEnded ? 'highlight' : ''].join(' ')}>
            <GameControlComponents gameEnded={gameEnded} setTime={setTime} setTimer={setTimer}
                                   resign={resign} time={time}/>
            <TitleComponents currentPlayer={currentPlayer} moveCount={moveCount} gameState={gameState} whiteTime={whiteTime}
                             blackTime={blackTime} gameEnded={gameEnded}/>
        </div>
    );
};

export default TimerComponents;
