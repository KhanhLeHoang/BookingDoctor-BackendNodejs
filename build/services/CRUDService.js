"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _models = _interopRequireDefault(require("../models"));
var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));
var salt = _bcryptjs["default"].genSaltSync(10);
var createNewUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee2(data) {
    return _regeneratorRuntime["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(resolve, reject) {
                var hashPasswordFromBcrypt;
                return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return hashUserPassword(data.password);
                      case 3:
                        hashPasswordFromBcrypt = _context.sent;
                        _context.next = 6;
                        return _models["default"].User.create({
                          email: data.email,
                          password: hashPasswordFromBcrypt,
                          firstName: data.firstName,
                          lastName: data.lastName,
                          address: data.address,
                          phonenumber: data.phonenumber,
                          gender: data.gender === '1' ? true : false,
                          roleId: data.roleId
                        });
                      case 6:
                        resolve();
                        _context.next = 12;
                        break;
                      case 9:
                        _context.prev = 9;
                        _context.t0 = _context["catch"](0);
                        reject(_context.t0);
                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[0, 9]]);
              }));
              return function (_x2, _x3) {
                return _ref2.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function createNewUser(_x) {
    return _ref.apply(this, arguments);
  };
}();
var hashUserPassword = function hashUserPassword(password) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee3(resolve, reject) {
      var hashPassword;
      return _regeneratorRuntime["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _bcryptjs["default"].hashSync(password, salt);
            case 3:
              hashPassword = _context3.sent;
              resolve(hashPassword);
              _context3.next = 10;
              break;
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              reject(_context3.t0);
            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return function (_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var getUserInfoById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee5(userId) {
    return _regeneratorRuntime["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee4(resolve, reject) {
                var user;
                return _regeneratorRuntime["default"].wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return _models["default"].User.findOne({
                          where: {
                            id: userId
                          },
                          raw: true
                        });
                      case 3:
                        user = _context4.sent;
                        resolve(user);
                        _context4.next = 10;
                        break;
                      case 7:
                        _context4.prev = 7;
                        _context4.t0 = _context4["catch"](0);
                        reject(_context4.t0);
                      case 10:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, null, [[0, 7]]);
              }));
              return function (_x7, _x8) {
                return _ref5.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function getUserInfoById(_x6) {
    return _ref4.apply(this, arguments);
  };
}();
var updateUserData = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee7(userData) {
    return _regeneratorRuntime["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee6(resolve, reject) {
                return _regeneratorRuntime["default"].wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.prev = 0;
                        _context6.next = 3;
                        return _models["default"].User.update({
                          firstName: userData.firstName,
                          lastName: userData.lastName,
                          address: userData.address,
                          phonenumber: userData.phonenumber
                        }, {
                          where: {
                            id: userData.id
                          }
                        });
                      case 3:
                        resolve();
                        _context6.next = 9;
                        break;
                      case 6:
                        _context6.prev = 6;
                        _context6.t0 = _context6["catch"](0);
                        reject(_context6.t0);
                      case 9:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, null, [[0, 6]]);
              }));
              return function (_x10, _x11) {
                return _ref7.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return function updateUserData(_x9) {
    return _ref6.apply(this, arguments);
  };
}();
var deleteUserData = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee9(userId) {
    return _regeneratorRuntime["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee8(resolve, reject) {
                return _regeneratorRuntime["default"].wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.prev = 0;
                        _context8.next = 3;
                        return _models["default"].User.destroy({
                          where: {
                            id: userId
                          }
                        });
                      case 3:
                        resolve();
                        _context8.next = 9;
                        break;
                      case 6:
                        _context8.prev = 6;
                        _context8.t0 = _context8["catch"](0);
                        reject(_context8.t0);
                      case 9:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, null, [[0, 6]]);
              }));
              return function (_x13, _x14) {
                return _ref9.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return function deleteUserData(_x12) {
    return _ref8.apply(this, arguments);
  };
}();
module.exports = {
  createNewUser: createNewUser,
  getUserInfoById: getUserInfoById,
  updateUserData: updateUserData,
  deleteUserData: deleteUserData
};