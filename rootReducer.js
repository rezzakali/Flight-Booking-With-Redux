
import { combineReducers } from "redux";
import fliteBookingReducer from "./fliteBooking/fliteBookingReducer";

const rootReducer = combineReducers({
    flitebooking: fliteBookingReducer,
});

export default rootReducer;