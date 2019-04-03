"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(name) {
    _classCallCheck(this, User);

    this.name = name;
  }

  _createClass(User, [{
    key: "name",
    get: function get() {
      // get accesseur: permet d'ajouter du contrôle sur la capacité d'accéder ou de transformer
      return this._name;
    },
    set: function set(value) {
      // set mutateur
      this._name = value;
    }
  }]);

  return User;
}();

exports.User = User;