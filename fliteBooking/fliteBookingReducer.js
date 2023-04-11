import { BOOKEDFLITE, CHECKEDBOOKING, DELETEBOOKING, DELETESELECTEDBOOKINGS, EDITBOOKING, INPUTCHANGE, RESETBOOKINGS } from "./actionTypes";

const initialState = {
   bookingInfo:{
    from: "",
    to: "",
    date: "",
  guests: 0,
  ticketClass: "",
 
   },
   bookingsList:[]
};

const fliteBookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUTCHANGE:
            return {
                ...state,

                bookingInfo:{...state.bookingInfo ,  [action.payload.name]: action.payload.value},
            };
        case DELETEBOOKING:
            return {
                ...state,
                bookingsList:state.bookingsList.filter(booking=>booking.id!==action.payload)
                
            };
        case DELETESELECTEDBOOKINGS:
            return {
                ...state,
                bookingsList:state.bookingsList.filter(booking=>!booking?.isCheceked)
                
            };
        case CHECKEDBOOKING:
            return {
                ...state,
                bookingsList:state.bookingsList.map(booking=>(booking.id==action.payload ? {...booking,
                    isCheceked:!booking?.isCheceked}:booking))
                
            };
        case EDITBOOKING:
            return {
                ...state,
                
                bookingInfo:{...state.bookingsList.find(booking=>booking.id ==action.payload)} ,
                bookingsList:state.bookingsList.filter(booking=>booking.id!==action.payload)

                
            };
        case RESETBOOKINGS:
            return {
                ...state,
                bookingsList:[]
                
            };
        case BOOKEDFLITE:
            return {
                ...state,

                bookingsList:[...state.bookingsList, {...action?.payload,id:Date.now(),
                    isCheceked: false}]  ,
                bookingInfo:{ from: "",
                to: "",
                date: "",
              guests: 0,
              

              ticketClass: ""}
            };

      

        default:
            return state;
    }
};

export default fliteBookingReducer;