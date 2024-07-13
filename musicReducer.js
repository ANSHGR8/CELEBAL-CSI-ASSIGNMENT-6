const initialState = {
  isPlaying: false,
};

export default function musicReducer(state = initialState, action) {
  switch (action.type) {
    case 'PLAY_SONG':
      return { ...state, isPlaying: true };
    case 'PAUSE_SONG':
      return { ...state, isPlaying: false };
    default:
      return state;
  }
}
