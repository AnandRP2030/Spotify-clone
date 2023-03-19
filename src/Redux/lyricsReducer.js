const initialState = {
  id: [],
  data: [],
  htmlData: [],
};

const LyricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: [...action.payload],
      };
    case "FETCH_ID":
      return {
        ...state,
        id: [...action.payload],
      };
    case "HTML_DATA":
      return {
        ...state,
        htmlData: [...state.htmlData, action.payload],
      };
    default:
      return state;
  }
};
export { LyricsReducer };
