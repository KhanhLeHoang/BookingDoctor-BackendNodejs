require('dotenv').config()
import db, { Sequelize } from '../models/index'
const Op = Sequelize.Op;
const moment = require('moment');

const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE

let getTopDoctorsService = (limit) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.User.findAll({
        where: { roleId: 'R2' },
        limit: limit,
        order: [['createdAt', 'DESC']],
        attributes: { exclude: ['password'] },
        include: [
          { model: db.Allcode, as: 'positionData', attributes: ['value_en', 'value_vi'] },
          { model: db.Allcode, as: 'genderData', attributes: ['value_en', 'value_vi'] }
        ],
        raw: true,
        nest: true,
      })
      resolve({
        errCode: 0,
        data: data
      })
    } catch (error) {
      reject(error)
    }
  })
}

let getAllDoctorsService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let doctors = await db.User.findAll({
        where: { roleId: 'R2' },
        attributes: {
          exclude: ['password', 'image']
        }
      })

      resolve({
        errCode: 0,
        data: doctors
      })
    } catch (e) {
      reject(e)
    }
  })
}

let postInfoDoctorService = (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!inputData.doctorId || !inputData.contentHTML || !inputData.contentMarkdown) {
        return resolve({
          errCode: 1,
          message: 'Missing parameter!'
        })
      }
      if (inputData.hasMarkdown === false) {  //create new markdown
        await db.Markdown.create({
          contentHTML: inputData.contentHTML,
          contentMarkdown: inputData.contentMarkdown,
          description: inputData.description,
          doctorId: inputData.doctorId
        })
      } else {    // edit markdown
        let detailDoctor = await db.Markdown.findOne({
          where: { doctorId: inputData.doctorId },
          raw: false
        })
        if (detailDoctor) {
          detailDoctor.contentHTML = inputData.contentHTML
          detailDoctor.contentMarkdown = inputData.contentMarkdown
          detailDoctor.description = inputData.description
          await detailDoctor.save()
        }
      }
      resolve({
        errCode: 0,
        message: 'Save infor doctor succeed!'
      })
    }
    catch (e) {

    }
  })
}

let getDetailDoctorService = (doctorId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let info = await db.User.findOne({
        where: { id: doctorId },
        attributes: {
          exclude: ['password'],
        },
        include: [
          { model: db.Markdown, attributes: ['contentHTML', 'contentMarkdown', 'description'] },
          { model: db.Allcode, as: 'positionData', attributes: ['value_en', 'value_vi'] },
        ],
        raw: false,
        nest: true,
      })
      if (info && info.image) {
        info.image = new Buffer.from(info.image, 'base64').toString('binary')
      }

      resolve({
        errCode: 0,
        data: info
      })
    } catch (e) {
      reject(e)
    }
  })
}

let bulkCreateScheduleService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data.arrSchedule && data.arrSchedule.length > 0) {
        let schedule = data.arrSchedule.map(item => {
          item.maxNumber = MAX_NUMBER_SCHEDULE
          item.date = new Date(item.date * 1000)
          return item
        })
        await db.Schedule.bulkCreate(schedule)
        resolve({
          errCode: 0,
        })
      }
      else {
        reject({
          errCode: 1,
          message: 'Schedule times invalid!'
        })
      }
    } catch (e) {
      reject(e)
    }
  })
}

let bulkDeleteScheduleService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data && data.arrId && data.arrId.length > 0) {
        await db.Schedule.destroy({
          where: {
            id: data.arrId
          }
        })
      } else {
        resolve({
          errCode: 1,
          message: "Parameters to delete invalid!"
        })
      }
      resolve({
        errCode: 0,
        message: "Delete succeed!"
      })
    } catch (e) {
      reject(e)
    }
  })
}

let getScheduleService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data.doctorId && data.date) {
        let res = await db.Schedule.findAll({
          where: {
            doctorId: data.doctorId,
            date: {
              [Op.eq]: new Date(data.date * 1000)
            }
          }
        })
        resolve({
          errCode: 0,
          data: res
        })
      }
      else {
        resolve({
          errCode: 1,
          message: 'Missing parameters!'
        })
      }
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  getTopDoctorsService,
  getAllDoctorsService,
  postInfoDoctorService,
  getDetailDoctorService,
  bulkCreateScheduleService,
  bulkDeleteScheduleService,
  getScheduleService,
}