import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import myValidator from "./middleware/myValidator";
import rootReducer from "./rootReducer";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(myValidator))
);

export default store;
