"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = _interopRequireDefault(require("../models/index"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var salt = _bcryptjs["default"].genSaltSync(10);
var handleUserLogin = function handleUserLogin(email, password) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
      var user, checkPassword;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _index["default"].User.findOne({
                attributes: ['email', 'roleId', 'password', 'firstName', 'lastName'],
                where: {
                  email: email
                },
                raw: true
              });
            case 3:
              user = _context.sent;
              if (user) {
                checkPassword = _bcryptjs["default"].compareSync(password, user.password);
                if (checkPassword === true) {
                  delete user.password;
                  resolve({
                    errCode: 0,
                    message: "Login success!",
                    user: user
                  });
                } else {
                  resolve({
                    errCode: 3,
                    message: "User's password is not true!"
                  });
                }
              } else {
                resolve({
                  errCode: 2,
                  message: "User's email is not exist!"
                });
              }
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
var getALlUsers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userId) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
                var user;
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        user = null;
                        if (!(userId === 'ALL')) {
                          _context2.next = 8;
                          break;
                        }
                        _context2.next = 5;
                        return _index["default"].User.findAll({
                          attributes: {
                            exclude: ['password']
                          }
                        });
                      case 5:
                        user = _context2.sent;
                        _context2.next = 12;
                        break;
                      case 8:
                        if (!userId) {
                          _context2.next = 12;
                          break;
                        }
                        _context2.next = 11;
                        return _index["default"].User.findOne({
                          where: {
                            id: userId
                          },
                          attributes: {
                            exclude: ['password']
                          }
                        });
                      case 11:
                        user = _context2.sent;
                      case 12:
                        resolve(user);
                        _context2.next = 18;
                        break;
                      case 15:
                        _context2.prev = 15;
                        _context2.t0 = _context2["catch"](0);
                        reject(_context2.t0);
                      case 18:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[0, 15]]);
              }));
              return function (_x4, _x5) {
                return _ref3.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function getALlUsers(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var hashUserPassword = function hashUserPassword(password) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
      var hashPassword;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _bcryptjs["default"].hashSync(password, salt);
            case 3:
              hashPassword = _context4.sent;
              resolve(hashPassword);
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
    return function (_x6, _x7) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var createNewUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(userInfo) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(resolve, reject) {
                var checkEmail, hashPasswordFromBcrypt;
                return _regenerator["default"].wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.prev = 0;
                        if (userInfo.email) {
                          _context5.next = 3;
                          break;
                        }
                        return _context5.abrupt("return", resolve({
                          errCode: 1,
                          message: 'Email is missing!'
                        }));
                      case 3:
                        _context5.next = 5;
                        return _index["default"].User.findOne({
                          where: {
                            email: userInfo.email
                          }
                        });
                      case 5:
                        checkEmail = _context5.sent;
                        if (!checkEmail) {
                          _context5.next = 8;
                          break;
                        }
                        return _context5.abrupt("return", resolve({
                          errCode: 2,
                          message: 'Email already in used!'
                        }));
                      case 8:
                        _context5.next = 10;
                        return hashUserPassword(userInfo.password);
                      case 10:
                        hashPasswordFromBcrypt = _context5.sent;
                        _context5.next = 13;
                        return _index["default"].User.create({
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
                      case 13:
                        resolve({
                          errCode: 0,
                          message: 'Create user succeed!'
                        });
                        _context5.next = 19;
                        break;
                      case 16:
                        _context5.prev = 16;
                        _context5.t0 = _context5["catch"](0);
                        reject(_context5.t0);
                      case 19:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, null, [[0, 16]]);
              }));
              return function (_x9, _x10) {
                return _ref6.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function createNewUser(_x8) {
    return _ref5.apply(this, arguments);
  };
}();
var updateUserData = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(userInfo) {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(resolve, reject) {
                return _regenerator["default"].wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.prev = 0;
                        if (userInfo.id) {
                          _context7.next = 3;
                          break;
                        }
                        return _context7.abrupt("return", resolve({
                          errCode: 1,
                          message: 'ID required!'
                        }));
                      case 3:
                        _context7.next = 5;
                        return _index["default"].User.update({
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
                      case 5:
                        resolve({
                          errCode: 0,
                          message: 'Edit user succeed!'
                        });
                        _context7.next = 11;
                        break;
                      case 8:
                        _context7.prev = 8;
                        _context7.t0 = _context7["catch"](0);
                        reject(_context7.t0);
                      case 11:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, null, [[0, 8]]);
              }));
              return function (_x12, _x13) {
                return _ref8.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return function updateUserData(_x11) {
    return _ref7.apply(this, arguments);
  };
}();
var deleteUser = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(userId) {
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(resolve, reject) {
                return _regenerator["default"].wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.prev = 0;
                        if (userId) {
                          _context9.next = 3;
                          break;
                        }
                        return _context9.abrupt("return", resolve({
                          errCode: 1,
                          message: 'User ID is empty!'
                        }));
                      case 3:
                        _context9.next = 5;
                        return _index["default"].User.destroy({
                          where: {
                            id: userId
                          }
                        });
                      case 5:
                        resolve({
                          errCode: 0,
                          message: 'Delete succeed!'
                        });
                        _context9.next = 11;
                        break;
                      case 8:
                        _context9.prev = 8;
                        _context9.t0 = _context9["catch"](0);
                        reject(_context9.t0);
                      case 11:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, null, [[0, 8]]);
              }));
              return function (_x15, _x16) {
                return _ref10.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return function deleteUser(_x14) {
    return _ref9.apply(this, arguments);
  };
}();
var getAllCodeService = function getAllCodeService(typeInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(resolve, reject) {
      var allcode;
      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              if (typeInput) {
                _context11.next = 5;
                break;
              }
              resolve({
                errCode: 1,
                message: "Missing required parameters!"
              });
              _context11.next = 9;
              break;
            case 5:
              _context11.next = 7;
              return _index["default"].Allcode.findAll({
                where: {
                  type: typeInput
                }
              });
            case 7:
              allcode = _context11.sent;
              resolve({
                errCode: 0,
                data: allcode
              });
            case 9:
              _context11.next = 14;
              break;
            case 11:
              _context11.prev = 11;
              _context11.t0 = _context11["catch"](0);
              reject(_context11.t0);
            case 14:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[0, 11]]);
    }));
    return function (_x17, _x18) {
      return _ref11.apply(this, arguments);
    };
  }());
};
module.exports = {
  handleUserLogin: handleUserLogin,
  getALlUsers: getALlUsers,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  updateUserData: updateUserData,
  getAllCodeService: getAllCodeService
};