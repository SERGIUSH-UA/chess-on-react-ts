export enum GameState {
    START = 'First move',
    PLAYING = 'Playing',
    CHECK = 'Check',
    CHECKMATE = 'Checkmate',
    WIN_ON_TIME = 'Win on time',
    RESIGNATION = 'Resignation', //A player may resign, conceding the game to the opponent. Most tournament players consider it good etiquette to resign in a hopeless position.
    DEAD_POSITION = 'Dead position',
}