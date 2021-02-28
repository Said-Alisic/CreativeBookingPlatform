import sequelize from '../db_config.js';
import StudentModel from '../models/StudentModel.js';

const Student = sequelize.models.Student;

export const addNewStudent = (req, res) => {
    Student.create(req.body)
        .then(data => res.json(data))

}

export const getStudents = (req, res) => {
    Student.findAll()
        .then(data => res.json(data))
}

export const getStudentById = (req, res) => {
    Student.findByPk(req.params.StudentId)
        .then(data => res.json(data))
}