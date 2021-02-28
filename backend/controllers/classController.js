import sequelize from '../db_config.js';
import ClassModel from '../models/ClassModel.js';

const Class = sequelize.models.Class;

export const addNewClass = (req, res) => {
    Class.create(req.body)
        .then(data => res.json(data))

}

export const getClasses = (req, res) => {
    Class.findAll()
        .then(data => res.json(data))
}

export const getClassById = (req, res) => {
    Class.findByPk(req.params.ClassId)
        .then(data => res.json(data))
}