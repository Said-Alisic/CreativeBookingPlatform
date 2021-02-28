import { 
    addNewClass, 
    getClasses,
    getClassById
} from '../controllers/classController.js';

const classRoutes = (server) => {
    server.route('/api/classes')
        .get(getClasses)
        .post(addNewClass)
    
    server.route('/api/class/:ClassId')
        .get(getClassById)

}

export default classRoutes;