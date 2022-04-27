import express from "express"
import homeController from "../controllers/homeController"
import userControllers from "../controllers/userController"
import doctorControllers from "../controllers/doctorControllers"

let router = express.Router();

let initWebRoutes = (app) => {
  router.get('/', homeController.getHomePage);
  router.get('/crud', homeController.getCRUD);
  router.post('/create-crud', homeController.createCRUD);
  router.get('/edit-crud', homeController.getEditCRUD);
  router.post('/save-edit', homeController.saveEditCRUD);
  router.get('/delete-crud', homeController.getDeleteCRUD);

  router.post('/api/login', userControllers.handleLogin);
  router.get('/api/get-all-users', userControllers.handleGetAllUsers);
  router.post('/api/create-user', userControllers.createUser);
  router.put('/api/edit-user', userControllers.editUser);
  router.delete('/api/delete-user', userControllers.deleteUser);
  router.get('/api/allcode', userControllers.getAllCode);

  router.get('/api/get-top-doctor', doctorControllers.getTopDoctor);
  router.get('/api/get-all-doctors', doctorControllers.getAllDoctors);
  router.post('/api/save-info-doctor', doctorControllers.postInfoDoctor);
  router.get('/api/get-detail-doctor-by-id', doctorControllers.getDetailDoctorById)
  router.post('/api/bulk-create-schedule', doctorControllers.bulkCreateSchedule)
  router.delete('/api/bulk-delete-schedule', doctorControllers.bulkDeleteSchedule)
  router.get('/api/get-schedule', doctorControllers.getSchedule)

  return app.use('/', router);
}

module.exports = initWebRoutes;