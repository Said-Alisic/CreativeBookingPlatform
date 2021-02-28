import sequelize from '../db_config.js'

const Teacher = sequelize.models.Teacher;

export const addNewTeacher = (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))

}
