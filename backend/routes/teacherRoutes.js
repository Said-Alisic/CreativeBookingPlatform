import { 
    addNewTeacher, 
    getTeachers
} from '../controllers/teacherController.js';

const teacherRoutes = (server) => {
    server.route('/api/teachers')
        .get(getTeachers)
        .post(addNewTeacher)

}

export default teacherRoutes;
