import sequelize from '../db_config.js';
import TeacherModel from '../models/TeacherModel.js';

const Teacher = sequelize.models.Teacher;

export const addNewTeacher = (req, res) => {
    Teacher.create(req.body)
        .then(teacher => res.json(teacher))

}

export const getTeachers = (req, res) => {
    Teacher.findAll()
        .then(teachers => res.json(teachers))
}

export const getTeacherById = (req, res) => {
    Teacher.findByPk(req.params.TeacherId)
        .then(teacher => res.json(teacher))
}


