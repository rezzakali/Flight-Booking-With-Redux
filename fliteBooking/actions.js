import { BOOKEDFLITE, CHECKEDBOOKING, DELETEBOOKING, DELETESELECTEDBOOKINGS, EDITBOOKING, INPUTCHANGE, RESETBOOKINGS } from "./actionTypes";


export const inputChange = (event) => {
const value =event.target;


    return {
        type: INPUTCHANGE,
        payload: value,
    };
};
export const bookedFilte = (bookinfo) => {

const value = {...bookinfo}

    return {
        type: BOOKEDFLITE,
        payload: value,
    };
};
export const deleteBookig = (bookingId) => {



    return {
        type: DELETEBOOKING,
        payload: bookingId,
    };
};
export const deleteSeletedBookings = () => {



    return {
        type: DELETESELECTEDBOOKINGS,
        
    };
};
export const editBookig = (bookingId) => {



    return {
        type: EDITBOOKING,
        payload: bookingId,
    };
};
export const restBookigs = (bookingId) => {



    return {
        type: RESETBOOKINGS,
        payload: bookingId,
    };
};
export const checkedBookings = (bookingId) => {



    return {
        type: CHECKEDBOOKING,
        payload: bookingId,
    };
};