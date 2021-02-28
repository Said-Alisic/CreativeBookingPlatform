import sequelize from '../db_config.js';
import TimeSlotModel from '../models/TimeSlotModel.js';

const TimeSlot = sequelize.models.TimeSlot;

export const addNewTimeSlot = (req, res) => {
    TimeSlot.create(req.body)
        .then(data => res.json(data))

}

export const getTimeSlots = (req, res) => {
    TimeSlot.findAll()
        .then(data => res.json(data))
}

export const getTimeSlotById = (req, res) => {
    TimeSlot.findByPk(req.params.TimeSlotId)
        .then(data => res.json(data))
}