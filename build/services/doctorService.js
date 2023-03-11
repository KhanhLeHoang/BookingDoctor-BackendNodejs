"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = _interopRequireWildcard(require("../models/index"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
require('dotenv').config();
var Op = _index.Sequelize.Op;
var moment = require('moment');
var MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;
var getTopDoctorsService = function getTopDoctorsService(limit) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _index["default"].User.findAll({
                where: {
                  roleId: 'R2'
                },
                limit: limit,
                order: [['createdAt', 'DESC']],
                attributes: {
                  exclude: ['password']
                },
                include: [{
                  model: _index["default"].Allcode,
                  as: 'positionData',
                  attributes: ['value_en', 'value_vi']
                }, {
                  model: _index["default"].Allcode,
                  as: 'genderData',
                  attributes: ['value_en', 'value_vi']
                }],
                raw: true,
                nest: true
              });
            case 3:
              data = _context.sent;
              resolve({
                errCode: 0,
                data: data
              });
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              reject(_context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var getAllDoctorsService = function getAllDoctorsService() {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
      var doctors;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _index["default"].User.findAll({
                where: {
                  roleId: 'R2'
                },
                attributes: {
                  exclude: ['password', 'image']
                }
              });
            case 3:
              doctors = _context2.sent;
              resolve({
                errCode: 0,
                data: doctors
              });
              _context2.next = 10;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              reject(_context2.t0);
            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var postInfoDoctorService = function postInfoDoctorService(inputData) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
      var detailDoctor;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              if (!(!inputData.doctorId || !inputData.contentHTML || !inputData.contentMarkdown)) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return", resolve({
                errCode: 1,
                message: 'Missing parameter!'
              }));
            case 3:
              if (!(inputData.hasMarkdown === false)) {
                _context3.next = 8;
                break;
              }
              _context3.next = 6;
              return _index["default"].Markdown.create({
                contentHTML: inputData.contentHTML,
                contentMarkdown: inputData.contentMarkdown,
                description: inputData.description,
                doctorId: inputData.doctorId
              });
            case 6:
              _context3.next = 17;
              break;
            case 8:
              _context3.next = 10;
              return _index["default"].Markdown.findOne({
                where: {
                  doctorId: inputData.doctorId
                },
                raw: false
              });
            case 10:
              detailDoctor = _context3.sent;
              if (!detailDoctor) {
                _context3.next = 17;
                break;
              }
              detailDoctor.contentHTML = inputData.contentHTML;
              detailDoctor.contentMarkdown = inputData.contentMarkdown;
              detailDoctor.description = inputData.description;
              _context3.next = 17;
              return detailDoctor.save();
            case 17:
              resolve({
                errCode: 0,
                message: 'Save infor doctor succeed!'
              });
              _context3.next = 22;
              break;
            case 20:
              _context3.prev = 20;
              _context3.t0 = _context3["catch"](0);
            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 20]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var getDetailDoctorService = function getDetailDoctorService(doctorId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
      var info;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _index["default"].User.findOne({
                where: {
                  id: doctorId
                },
                attributes: {
                  exclude: ['password']
                },
                include: [{
                  model: _index["default"].Markdown,
                  attributes: ['contentHTML', 'contentMarkdown', 'description']
                }, {
                  model: _index["default"].Allcode,
                  as: 'positionData',
                  attributes: ['value_en', 'value_vi']
                }],
                raw: false,
                nest: true
              });
            case 3:
              info = _context4.sent;
              if (info && info.image) {
                info.image = new Buffer.from(info.image, 'base64').toString('binary');
              }
              resolve({
                errCode: 0,
                data: info
              });
              _context4.next = 11;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              reject(_context4.t0);
            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 8]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var bulkCreateScheduleService = function bulkCreateScheduleService(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(resolve, reject) {
      var schedule;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              if (!(data.arrSchedule && data.arrSchedule.length > 0)) {
                _context5.next = 8;
                break;
              }
              schedule = data.arrSchedule.map(function (item) {
                item.maxNumber = MAX_NUMBER_SCHEDULE;
                item.date = new Date(item.date * 1000);
                return item;
              });
              _context5.next = 5;
              return _index["default"].Schedule.bulkCreate(schedule);
            case 5:
              resolve({
                errCode: 0
              });
              _context5.next = 9;
              break;
            case 8:
              reject({
                errCode: 1,
                message: 'Schedule times invalid!'
              });
            case 9:
              _context5.next = 14;
              break;
            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](0);
              reject(_context5.t0);
            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 11]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var bulkDeleteScheduleService = function bulkDeleteScheduleService(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(resolve, reject) {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              if (!(data && data.arrId && data.arrId.length > 0)) {
                _context6.next = 6;
                break;
              }
              _context6.next = 4;
              return _index["default"].Schedule.destroy({
                where: {
                  id: data.arrId
                }
              });
            case 4:
              _context6.next = 7;
              break;
            case 6:
              resolve({
                errCode: 1,
                message: "Parameters to delete invalid!"
              });
            case 7:
              resolve({
                errCode: 0,
                message: "Delete succeed!"
              });
              _context6.next = 13;
              break;
            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](0);
              reject(_context6.t0);
            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 10]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var getScheduleService = function getScheduleService(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(resolve, reject) {
      var res;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              if (!(data.doctorId && data.date)) {
                _context7.next = 8;
                break;
              }
              _context7.next = 4;
              return _index["default"].Schedule.findAll({
                where: {
                  doctorId: data.doctorId,
                  date: (0, _defineProperty2["default"])({}, Op.eq, new Date(data.date * 1000))
                }
              });
            case 4:
              res = _context7.sent;
              resolve({
                errCode: 0,
                data: res
              });
              _context7.next = 9;
              break;
            case 8:
              resolve({
                errCode: 1,
                message: 'Missing parameters!'
              });
            case 9:
              _context7.next = 14;
              break;
            case 11:
              _context7.prev = 11;
              _context7.t0 = _context7["catch"](0);
              reject(_context7.t0);
            case 14:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 11]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};
module.exports = {
  getTopDoctorsService: getTopDoctorsService,
  getAllDoctorsService: getAllDoctorsService,
  postInfoDoctorService: postInfoDoctorService,
  getDetailDoctorService: getDetailDoctorService,
  bulkCreateScheduleService: bulkCreateScheduleService,
  bulkDeleteScheduleService: bulkDeleteScheduleService,
  getScheduleService: getScheduleService
};