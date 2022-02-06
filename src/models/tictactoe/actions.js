export const PLAY = 'PLAY';
export const play = (payload) => ({
  type: PLAY,
  payload,
});

export const JUMP_TO = 'JUMP_TO';
export const jump = (payload) => ({
  type: JUMP_TO,
  payload,
});

export const GAME_OVER = 'GAME_OVER';
export const gameOver = () => ({
  type: GAME_OVER,
});
