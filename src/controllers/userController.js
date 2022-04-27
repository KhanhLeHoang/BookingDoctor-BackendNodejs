import userService from "../services/userService"

let handleLogin = async (req, res) => {
  let email = req.body.email
  let password = req.body.password
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "User email or password invalid!"
    })
  }
  let user = await userService.handleUserLogin(email, password)
  return res.status(200).json(user)
}

let handleGetAllUsers = async (req, res) => {
  let id = req.query.id
  if (!id) {
    return res.status(500).json({
      errCode: 1,
      message: 'ID is not defined!',
      data: []
    })
  }
  let user = await userService.getALlUsers(id)
  if (user) {
    return res.status(200).json({
      errCode: 0,
      message: "Found user!",
      data: user
    })
  } else {
    return res.status(500).json({
      errCode: 2,
      message: "User ID not found!",
      data: user
    })
  }
}

let createUser = async (req, res) => {
  let statusCreateUser = await userService.createNewUser(req.body);
  if (statusCreateUser.errCode === 0) {
    return res.status(200).json(statusCreateUser)
  } else {
    return res.status(500).json(statusCreateUser)
  }
}

let editUser = async (req, res) => {
  let status = await userService.updateUserData(req.body);
  if (status.errCode === 0) {
    return res.status(200).json(status)
  } else {
    return res.status(500).json(status)
  }
}

let deleteUser = async (req, res) => {
  let data = await userService.deleteUser(req.body.id)
  return res.status(200).json(data)
}

let getAllCode = async (req, res) => {
  try {
    let data = await userService.getAllCodeService(req.query.type)
    return res.status(200).json(data)
  } catch (e) {
    console.log("Get all code error: ", e)
    return res.status(200).json({
      errCode: -1,
      message: "Error from server"
    })
  }
}

module.exports = {
  handleLogin,
  handleGetAllUsers,
  createUser,
  editUser,
  deleteUser,
  getAllCode,
}