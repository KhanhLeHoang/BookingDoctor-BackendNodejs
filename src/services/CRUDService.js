import bcrypt from 'bcryptjs';
import db from '../models';

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId
            });
            resolve();
        } catch (e) {
            reject(e);
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

let getUserInfoById = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: {
                    id: userId
                }, raw: true,
            });
            resolve(user);
        } catch (e) {
            reject(e);
        }
    });
}

let updateUserData = async (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.update({
                firstName: userData.firstName,
                lastName: userData.lastName,
                address: userData.address,
                phonenumber: userData.phonenumber
            }, {
                where: {
                    id: userData.id
                }
            });
            resolve()
        } catch (e) {
            reject(e);
        }
    });
}

let deleteUserData = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.destroy({
                where: {
                    id: userId
                }
            });
            resolve()
        } catch (e) {
            reject(e)
        }
    });
}

module.exports = {
    createNewUser: createNewUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
    deleteUserData: deleteUserData,
}