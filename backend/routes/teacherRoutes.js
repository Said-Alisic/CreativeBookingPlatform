import { addNewTeacher } from '../controllers/teacherController.js';


const teacherRoutes = (server) => {

    server.route('/api/teachers')
        .post(addNewTeacher)

}


