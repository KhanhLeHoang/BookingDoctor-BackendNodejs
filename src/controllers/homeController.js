import db from '../models/index';
import CRUDService from '../services/CRUDService';


let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll({
            raw: true
        })
        return res.render("homepage.ejs", {
            data: data
        });
    } catch (e) {
        console.log(e);
    }
}

let getCRUD = (req, res) => {
    return res.render('create.ejs');
}

let createCRUD = async (req, res) => {
    let statusCreateUser = await CRUDService.createNewUser(req.body);
    return res.redirect('/');
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        if (userData === null) {
            return res.send('User not found!');
        } else {
            return res.render('crud-edit.ejs', {
                user: userData,
            });
        }
    } else {
        return res.send('User not found!');
    }
}

let saveEditCRUD = async (req, res) => {
    await CRUDService.updateUserData(req.body);
    return res.redirect('/');
}

let getDeleteCRUD = async (req, res) => {
    await CRUDService.deleteUserData(req.query.id);
    return res.redirect('/');
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    createCRUD: createCRUD,
    getEditCRUD: getEditCRUD,
    saveEditCRUD: saveEditCRUD,
    getDeleteCRUD: getDeleteCRUD,
}