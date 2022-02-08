import { Action } from 'libraries/model/Action';

export const play = Action('PLAY');
export const jumpTo = Action('JUMP_TO');

// const PLAY = 'PLAY';
// export const play = (payload) => ({
//   type: PLAY,
//   payload,
// });
// play.type = PLAY;

// export const JUMP_TO = 'JUMP_TO';
// export const jump = (payload) => ({
//   type: JUMP_TO,
//   payload,
// });
// jump.type = JUMP_TO;

// export const GAME_OVER = 'GAME_OVER';
// export const gameOver = () => ({
//   type: GAME_OVER,
// });
