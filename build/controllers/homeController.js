"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = _interopRequireDefault(require("../models/index"));
var _CRUDService = _interopRequireDefault(require("../services/CRUDService"));
var getHomePage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index["default"].User.findAll({
              raw: true
            });
          case 3:
            data = _context.sent;
            return _context.abrupt("return", res.render("homepage.ejs", {
              data: data
            }));
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getHomePage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getCRUD = function getCRUD(req, res) {
  return res.render('create.ejs');
};
var createCRUD = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var statusCreateUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _CRUDService["default"].createNewUser(req.body);
          case 2:
            statusCreateUser = _context2.sent;
            return _context2.abrupt("return", res.redirect('/'));
          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function createCRUD(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getEditCRUD = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var userId, userData;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            userId = req.query.id;
            if (!userId) {
              _context3.next = 12;
              break;
            }
            _context3.next = 4;
            return _CRUDService["default"].getUserInfoById(userId);
          case 4:
            userData = _context3.sent;
            if (!(userData === null)) {
              _context3.next = 9;
              break;
            }
            return _context3.abrupt("return", res.send('User not found!'));
          case 9:
            return _context3.abrupt("return", res.render('crud-edit.ejs', {
              user: userData
            }));
          case 10:
            _context3.next = 13;
            break;
          case 12:
            return _context3.abrupt("return", res.send('User not found!'));
          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function getEditCRUD(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var saveEditCRUD = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _CRUDService["default"].updateUserData(req.body);
          case 2:
            return _context4.abrupt("return", res.redirect('/'));
          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function saveEditCRUD(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getDeleteCRUD = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _CRUDService["default"].deleteUserData(req.query.id);
          case 2:
            return _context5.abrupt("return", res.redirect('/'));
          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function getDeleteCRUD(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  createCRUD: createCRUD,
  getEditCRUD: getEditCRUD,
  saveEditCRUD: saveEditCRUD,
  getDeleteCRUD: getDeleteCRUD
};