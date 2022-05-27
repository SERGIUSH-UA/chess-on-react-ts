import React, {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import LostFiguresComponent from "./components/LostFiguresComponent";
import TimerComponents from "./components/TimerComponents";
import {GameState} from "./models/themes/GameState";

function App() {

    const [board, setBoard] = useState(new Board());
    const [whitePlayer, setWhitePlayer] = useState<Player> (new Player(Colors.WHITE));
    const [blackPlayer, setBlackPlayer] = useState<Player> (new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null> (null);
    const [moveCount, setMoveCount] = useState(0);
    const [gameState, setGameState] = useState<GameState>(GameState.START);
    const [gameEnded, setGameEnded] = useState(false);

    useEffect(() => {
        restart();
    }, []);

    useEffect(() => {
        if (gameState === GameState.WIN_ON_TIME || gameState === GameState.CHECKMATE
            || gameState === GameState.RESIGNATION){
            setGameEnded(true);
        }
        else if(gameEnded) {
            setGameEnded(false);
        }
    }, [gameState]);

    function resign() {
        setGameState(GameState.RESIGNATION);
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
    }

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
        setCurrentPlayer(whitePlayer);
        setMoveCount(1);
        setGameState(GameState.START);
    }

    function endMove(){
        if (gameEnded){
            return;
        }
        if( currentPlayer?.color === Colors.BLACK){
            setMoveCount(moveCount+1);
        }
        const nextPlayer = currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer;
        if(board.isKingUnderAttack(nextPlayer.color)){
            if (board.isKingCanMove(nextPlayer.color)){
                setGameState(GameState.CHECK);}
            else {
                setGameState(GameState.CHECKMATE);
                return;
            }
        }else if(gameState !== GameState.PLAYING){
            setGameState(GameState.PLAYING);
        }
        swapPlayer();
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

    function setWinner(color: Colors) {
        if (color === Colors.WHITE) {
            setCurrentPlayer(whitePlayer);}
        else {
            setCurrentPlayer(blackPlayer);
        }
    }
    
    return (
        <div className="App">

            <div className="field">
                <LostFiguresComponent highlight={currentPlayer === whitePlayer && !gameEnded} title="White lost:" figures={board.lostWhiteFigures}/>
            <div>
                <TimerComponents setWinner={setWinner} setGameState={setGameState} gameState={gameState} resign={resign}
                                 gameEnded={gameEnded} currentPlayer={currentPlayer} restart={restart}  moveCount={moveCount}/>
                <BoardComponent
                moveCount={moveCount}
            board={board}
            setBoard={setBoard}
            currentPlayer={currentPlayer}
                endMove={endMove}
            /></div>
                <LostFiguresComponent highlight={currentPlayer === blackPlayer && !gameEnded} title="Black lost:" figures={board.lostBlackFigures}/>
            </div>
        </div>
    );
}

export default App;
