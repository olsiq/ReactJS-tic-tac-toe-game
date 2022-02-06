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
