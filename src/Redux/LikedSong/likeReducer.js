
const initialValue = {
  likedSong: [],
};


export default function LikeReducer(state = initialValue, action) {
    console.log(action.payload, 'payload')
  switch (action.type) {
    case "DISPLAY_SONG":
      return {
        ...state,
        likedSong : [...state.likedSong, action.payload],
      };

    default:
      return state;
  }
}
