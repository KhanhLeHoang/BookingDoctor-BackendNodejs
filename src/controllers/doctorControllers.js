import doctorService from '../services/doctorService'

let getTopDoctor = async (req, res) => {
  let limit = req.query.limit
  if (!limit || isNaN(+limit)) {
    limit = 10
  }
  try {
    let data = await doctorService.getTopDoctorsService(+limit)
    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(200).json({
      errCode: -1,
      message: "Error from server..."
    })
  }
}

let getAllDoctors = async (req, res) => {
  try {
    let data = await doctorService.getAllDoctorsService()
    return res.status(200).json(data)
  } catch (e) {
    console.error(e)
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server'
    })
  }
}

let postInfoDoctor = async (req, res) => {
  try {
    let response = await doctorService.postInfoDoctorService(req.body)
    return res.status(200).json(response)
  } catch (e) {
    console.error(e)
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server'
    })
  }
}

let getDetailDoctorById = async (req, res) => {
  try {
    if (!req.query.id) return res.status(200).json({
      errCode: 1,
      message: 'Missing ID doctor!'
    })
    let response = await doctorService.getDetailDoctorService(req.query.id)
    return res.status(200).json(response)
  } catch (e) {
    console.error(e)
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server'
    })
  }
}

let bulkCreateSchedule = async (req, res) => {
  try {
    let response = await doctorService.bulkCreateScheduleService(req.body)
    return res.status(200).json(response)
  } catch (e) {
    console.error(e)
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server'
    })
  }
}

let bulkDeleteSchedule = async (req, res) => {
  try {
    let response = await doctorService.bulkDeleteScheduleService(req.body)
    return res.status(200).json(response)
  } catch (e) {
    console.log(e)
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server'
    })
  }
}

let getSchedule = async (req, res) => {
  try {
    let response = await doctorService.getScheduleService(req.query)
    return res.status(200).json(response)
  } catch (e) {
    console.error(e)
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server'
    })
  }
}


module.exports = {
  getTopDoctor,
  getAllDoctors,
  postInfoDoctor,
  getDetailDoctorById,
  bulkCreateSchedule,
  bulkDeleteSchedule,
  getSchedule,
}