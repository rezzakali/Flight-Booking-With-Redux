import toast from 'react-hot-toast';
import rootReducer from "../rootReducer";

// create our first middleware
const myValidator = (store) => (next) => (action) => {

    const upcomingState = [action].reduce(rootReducer, store.getState());



    if (action.type === 'flitebooking/bookflite' && upcomingState?.flitebooking?.bookingsList.length > 3) {
        toast.error('You cannot booked more than 3 bookings')

        return
    } else {
        if (action.type === 'flitebooking/bookflite') {

            if (action.payload.to === action.payload.from) {
                toast.error('Starting destination and end destination should  not be the same')
                return
            } else {

                toast.success('Successfully booked your tickets')

            }
        }
        return next(action);
    }

};

export default myValidator;