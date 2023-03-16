import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LikeReducer from "./LikedSong/likeReducer";


let store = createStore(LikeReducer);




store.subscribe(() => console.log('state',store.getState()));

export default store;