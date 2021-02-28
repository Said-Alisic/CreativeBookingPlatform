import { 
    addNewTimeSlot, 
    getTimeSlots,
    getTimeSlotById
} from '../controllers/timeSlotController.js';

const timeSlotRoutes = (server) => {
    server.route('/api/timeSlots')
        .get(getTimeSlots)
        .post(addNewTimeSlot)
    
    server.route('/api/timeSlot/:TimeSlotId')
        .get(getTimeSlotById)

}

export default timeSlotRoutes;