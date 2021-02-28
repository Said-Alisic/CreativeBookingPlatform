import { 
    addNewStudent, 
    getStudents,
    getStudentById
} from '../controllers/studentController.js';

const studentRoutes = (server) => {
    server.route('/api/students')
        .get(getStudents)
        .post(addNewStudent)
    
    server.route('/api/student/:StudentId')
        .get(getStudentById)

}

export default studentRoutes;