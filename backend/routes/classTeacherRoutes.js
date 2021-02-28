import { 
    addNewClassTeacher, 
    getClassTeachers,
    getClassTeacherById
} from '../controllers/classTeacherController.js';

const classTeacherRoutes = (server) => {
    server.route('/api/classTeachers')
        .get(getClassTeachers)
        .post(addNewClassTeacher)
    
    server.route('/api/classTeacher/:ClassTeacherId')
        .get(getClassTeacherById)

}

export default classTeacherRoutes;