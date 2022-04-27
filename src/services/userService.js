import db from '../models/index'
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        attributes: ['email', 'roleId', 'password', 'firstName', 'lastName'],
        where: { email: email },
        raw: true
      })
      if (user) {
        let checkPassword = bcrypt.compareSync(password, user.password)
        if (checkPassword === true) {
          delete user.password
          resolve({
            errCode: 0,
            message: `Login success!`,
            user: user
          })
        } else {
          resolve({
            errCode: 3,
            message: `User's password is not true!`
          })
        }
      } else {
        resolve({
          errCode: 2,
          message: `User's email is not exist!`
        })
      }
    } catch (e) {
      reject(e)
    }
  })
}

let getALlUsers = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = null
      if (userId === 'ALL') {
        user = await db.User.findAll({
          attributes: {
            exclude: ['password']
          }
        })
      } else {
        if (userId) {
          user = await db.User.findOne({
            where: {
              id: userId
            }, attributes: {
              exclude: ['password']
            }
          })
        }
      }
      resolve(user)
    } catch (e) {
      reject(e)
    }
  })
}

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  })
}

let createNewUser = async (userInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userInfo.email) {
        return resolve({
          errCode: 1,
          message: 'Email is missing!'
        });
      }
      //check email in used or not
      let checkEmail = await db.User.findOne({ where: { email: userInfo.email } })
      if (checkEmail) {
        return resolve({
          errCode: 2,
          message: 'Email already in used!'
        });
      }

      let hashPasswordFromBcrypt = await hashUserPassword(userInfo.password);
      await db.User.create({
        email: userInfo.email,
        password: hashPasswordFromBcrypt,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        address: userInfo.address,
        phonenumber: userInfo.phonenumber,
        gender: userInfo.gender,
        roleId: userInfo.roleId,
        positionId: userInfo.positionId,
        image: userInfo.image
      });
      resolve({
        errCode: 0,
        message: 'Create user succeed!'
      });
    } catch (e) {
      reject(e);
    }
  })
}

let updateUserData = async (userInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userInfo.id) {
        return resolve({
          errCode: 1,
          message: 'ID required!'
        })
      }
      await db.User.update({
        email: userInfo.email,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        address: userInfo.address,
        phonenumber: userInfo.phonenumber,
        gender: userInfo.gender,
        roleId: userInfo.roleId,
        positionId: userInfo.positionId,
        image: userInfo.image
      }, {
        where: {
          id: userInfo.id
        }
      });
      resolve({
        errCode: 0,
        message: 'Edit user succeed!'
      })
    } catch (e) {
      reject(e);
    }
  });
}

let deleteUser = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userId) return resolve({ errCode: 1, message: 'User ID is empty!' })
      await db.User.destroy({
        where: {
          id: userId
        }
      });
      resolve({
        errCode: 0,
        message: 'Delete succeed!'
      })
    } catch (e) {
      reject(e)
    }
  });
}

let getAllCodeService = (typeInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!typeInput) {
        resolve({
          errCode: 1,
          message: "Missing required parameters!"
        })
      } else {
        let allcode = await db.Allcode.findAll({
          where: {
            type: typeInput
          }
        })
        resolve({
          errCode: 0,
          data: allcode
        })
      }
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  handleUserLogin,
  getALlUsers,
  createNewUser,
  deleteUser,
  updateUserData,
  getAllCodeService,
}
