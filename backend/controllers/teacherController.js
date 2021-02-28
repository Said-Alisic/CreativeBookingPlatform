import sequelize from '../db_config.js';
import TeacherModel from '../models/TeacherModel.js';

const Teacher = sequelize.models.Teacher;

export const addNewTeacher = (req, res) => {
    Teacher.create(req.body)
        .then(data => res.json(data))

}

export const getTeachers = (req, res) => {
    Teacher.findAll()
        .then(data => res.json(data))
}

export const getTeacherById = (req, res) => {
    Teacher.findByPk(req.params.TeacherId)
        .then(data => res.json(data))
}


