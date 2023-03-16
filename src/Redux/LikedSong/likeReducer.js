
const initialValue = {
  likedSong: [],
};


export default function LikeReducer(state = initialValue, action) {
    
  switch (action.type) {
    case "DISPLAY_SONG":
      return {
        ...state,
        likedSong : [ action.payload],
      };

    default:
      return state;
  }
}
