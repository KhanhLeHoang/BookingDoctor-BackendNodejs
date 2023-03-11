"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _doctorService = _interopRequireDefault(require("../services/doctorService"));
var getTopDoctor = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var limit, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            limit = req.query.limit;
            if (!limit || isNaN(+limit)) {
              limit = 10;
            }
            _context.prev = 2;
            _context.next = 5;
            return _doctorService["default"].getTopDoctorsService(+limit);
          case 5:
            data = _context.sent;
            return _context.abrupt("return", res.status(200).json(data));
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            console.error(_context.t0);
            return _context.abrupt("return", res.status(200).json({
              errCode: -1,
              message: "Error from server..."
            }));
          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));
  return function getTopDoctor(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getAllDoctors = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _doctorService["default"].getAllDoctorsService();
          case 3:
            data = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(data));
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            return _context2.abrupt("return", res.status(200).json({
              errCode: -1,
              message: 'Error from server'
            }));
          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getAllDoctors(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var postInfoDoctor = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var response;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _doctorService["default"].postInfoDoctorService(req.body);
          case 3:
            response = _context3.sent;
            return _context3.abrupt("return", res.status(200).json(response));
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            return _context3.abrupt("return", res.status(200).json({
              errCode: -1,
              message: 'Error from server'
            }));
          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function postInfoDoctor(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getDetailDoctorById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var response;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            if (req.query.id) {
              _context4.next = 3;
              break;
            }
            return _context4.abrupt("return", res.status(200).json({
              errCode: 1,
              message: 'Missing ID doctor!'
            }));
          case 3:
            _context4.next = 5;
            return _doctorService["default"].getDetailDoctorService(req.query.id);
          case 5:
            response = _context4.sent;
            return _context4.abrupt("return", res.status(200).json(response));
          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);
            return _context4.abrupt("return", res.status(200).json({
              errCode: -1,
              message: 'Error from server'
            }));
          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function getDetailDoctorById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var bulkCreateSchedule = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var response;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _doctorService["default"].bulkCreateScheduleService(req.body);
          case 3:
            response = _context5.sent;
            return _context5.abrupt("return", res.status(200).json(response));
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);
            return _context5.abrupt("return", res.status(200).json({
              errCode: -1,
              message: 'Error from server'
            }));
          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function bulkCreateSchedule(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var bulkDeleteSchedule = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var response;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _doctorService["default"].bulkDeleteScheduleService(req.body);
          case 3:
            response = _context6.sent;
            return _context6.abrupt("return", res.status(200).json(response));
          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(200).json({
              errCode: -1,
              message: 'Error from server'
            }));
          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function bulkDeleteSchedule(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getSchedule = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var response;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _doctorService["default"].getScheduleService(req.query);
          case 3:
            response = _context7.sent;
            return _context7.abrupt("return", res.status(200).json(response));
          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            console.error(_context7.t0);
            return _context7.abrupt("return", res.status(200).json({
              errCode: -1,
              message: 'Error from server'
            }));
          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));
  return function getSchedule(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
module.exports = {
  getTopDoctor: getTopDoctor,
  getAllDoctors: getAllDoctors,
  postInfoDoctor: postInfoDoctor,
  getDetailDoctorById: getDetailDoctorById,
  bulkCreateSchedule: bulkCreateSchedule,
  bulkDeleteSchedule: bulkDeleteSchedule,
  getSchedule: getSchedule
};