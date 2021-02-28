import sequelize from '../db_config.js';
import ClassTeacherModel from '../models/ClassTeacherModel.js';

const ClassTeacher = sequelize.models.ClassTeacher;

export const addNewClassTeacher = (req, res) => {
    ClassTeacher.create(req.body)
        .then(data => res.json(data))

}

export const getClassTeachers = (req, res) => {
    ClassTeacher.findAll()
        .then(data => res.json(data))
}

export const getClassTeacherById = (req, res) => {
    ClassTeacher.findByPk(req.params.ClassTeacherId)
        .then(data => res.json(data))
}