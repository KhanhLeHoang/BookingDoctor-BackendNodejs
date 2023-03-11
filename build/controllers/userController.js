"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _userService = _interopRequireDefault(require("../services/userService"));
var handleLogin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var email, password, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = req.body.email;
            password = req.body.password;
            if (!(!email || !password)) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", res.status(500).json({
              errCode: 1,
              message: "User email or password invalid!"
            }));
          case 4:
            _context.next = 6;
            return _userService["default"].handleUserLogin(email, password);
          case 6:
            user = _context.sent;
            return _context.abrupt("return", res.status(200).json(user));
          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function handleLogin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var handleGetAllUsers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.query.id;
            if (id) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return", res.status(500).json({
              errCode: 1,
              message: 'ID is not defined!',
              data: []
            }));
          case 3:
            _context2.next = 5;
            return _userService["default"].getALlUsers(id);
          case 5:
            user = _context2.sent;
            if (!user) {
              _context2.next = 10;
              break;
            }
            return _context2.abrupt("return", res.status(200).json({
              errCode: 0,
              message: "Found user!",
              data: user
            }));
          case 10:
            return _context2.abrupt("return", res.status(500).json({
              errCode: 2,
              message: "User ID not found!",
              data: user
            }));
          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function handleGetAllUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var createUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var statusCreateUser;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _userService["default"].createNewUser(req.body);
          case 2:
            statusCreateUser = _context3.sent;
            if (!(statusCreateUser.errCode === 0)) {
              _context3.next = 7;
              break;
            }
            return _context3.abrupt("return", res.status(200).json(statusCreateUser));
          case 7:
            return _context3.abrupt("return", res.status(500).json(statusCreateUser));
          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function createUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var editUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var status;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _userService["default"].updateUserData(req.body);
          case 2:
            status = _context4.sent;
            if (!(status.errCode === 0)) {
              _context4.next = 7;
              break;
            }
            return _context4.abrupt("return", res.status(200).json(status));
          case 7:
            return _context4.abrupt("return", res.status(500).json(status));
          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function editUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _userService["default"].deleteUser(req.body.id);
          case 2:
            data = _context5.sent;
            return _context5.abrupt("return", res.status(200).json(data));
          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function deleteUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getAllCode = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _userService["default"].getAllCodeService(req.query.type);
          case 3:
            data = _context6.sent;
            return _context6.abrupt("return", res.status(200).json(data));
          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            console.log("Get all code error: ", _context6.t0);
            return _context6.abrupt("return", res.status(200).json({
              errCode: -1,
              message: "Error from server"
            }));
          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function getAllCode(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers,
  createUser: createUser,
  editUser: editUser,
  deleteUser: deleteUser,
  getAllCode: getAllCode
};