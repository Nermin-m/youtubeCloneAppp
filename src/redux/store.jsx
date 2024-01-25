
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import homeReducer from '../redux/reducers/homedata.jsx';
import detailReducer from "./reducers/detaildata.jsx";
import searchReducer from "./reducers/searchData.jsx";

let initialState = {};

let reducers = combineReducers({
    getVideos: homeReducer,
    getVideo:detailReducer,
    getSearch:searchReducer
});

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));
export default store;
