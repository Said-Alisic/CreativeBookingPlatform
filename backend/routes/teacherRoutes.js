import { 
    addNewTeacher, 
    getTeachers,
    getTeacherById
} from '../controllers/teacherController.js';

const teacherRoutes = (server) => {
    server.route('/api/teachers')
        .get(getTeachers)
        .post(addNewTeacher)
    
    server.route('/api/teacher/:TeacherId')
        .get(getTeacherById)

}

export default teacherRoutes;
