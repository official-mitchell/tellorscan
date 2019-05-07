'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _yup = require('yup');

var yup = _interopRequireWildcard(_yup);

var _ethereumjsAbi = require('ethereumjs-abi');

var _ethereumjsAbi2 = _interopRequireDefault(_ethereumjsAbi);

var _ethereumjsUtil = require('ethereumjs-util');

var util = _interopRequireWildcard(_ethereumjsUtil);

var _web3Utils = require('web3-utils');

var web3Utils = _interopRequireWildcard(_web3Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//var RIPEMD160 = require('ripemd160')

var propsSchema = yup.object().shape({
  account: yup.string().required("Missing account")
});

var randint = function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
var generate_random_number = function generate_random_number() {
  return randint(1000000, 9999999);
};

var trim0x = function trim0x(s) {
  if (s.startsWith('0x')) {
    return s.substr(2);
  }
  return s;
};

var Miner = function () {
  function Miner(props) {
    var _this = this;

    _classCallCheck(this, Miner);

    propsSchema.validateSync(props);
    this.account = props.account;
    this.chain = props.chain;
    if (!this.chain) {
      throw new Error("Missing chain in props");
    }

    ['mine'].forEach(function (fn) {
      return _this[fn] = _this[fn].bind(_this);
    });
  }

  _createClass(Miner, [{
    key: 'mine',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var challenge = _ref2.challenge,
            queryString = _ref2.queryString,
            difficulty = _ref2.difficulty;

        var last_block, x, j, jEnc, nonce, preHashStr, hashHexStr, rmdOut, num, diffBN, _block, _ref3, _challenge, _requestId, _difficulty, _queryString;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.chain.getBlockNumber();

              case 2:
                last_block = _context.sent;
                x = 0;

              case 4:
                if (!true) {
                  _context.next = 32;
                  break;
                }

                x += 1;
                j = generate_random_number();
                jEnc = Buffer.from("" + j);
                nonce = jEnc.toString("hex"); //ethUtils.toHex(jEnc.toString(""));

                preHashStr = challenge + trim0x(this.account) + trim0x(nonce);
                hashHexStr = util.sha3(preHashStr);
                rmdOut = util.ripemd160(hashHexStr);
                num = new util.BN(util.sha256(rmdOut));
                diffBN = new util.BN("" + difficulty);

                if (!(num.mod(diffBN).toString() - 0 === 0)) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt('return', j);

              case 16:
                if (!(x % 10000 === 0)) {
                  _context.next = 30;
                  break;
                }

                _context.next = 19;
                return this.chain.getBlockNumber();

              case 19:
                _block = _context.sent;

                if (!(last_block != _block)) {
                  _context.next = 30;
                  break;
                }

                _context.next = 23;
                return this.chain.contract.getCurrentVariables();

              case 23:
                _ref3 = _context.sent;
                _challenge = _ref3._challenge;
                _requestId = _ref3._requestId;
                _difficulty = _ref3._difficulty;
                _queryString = _ref3._queryString;

                if (!(challenge !== _challenge)) {
                  _context.next = 30;
                  break;
                }

                return _context.abrupt('return', 0);

              case 30:
                _context.next = 4;
                break;

              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function mine(_x) {
        return _ref.apply(this, arguments);
      }

      return mine;
    }()
  }]);

  return Miner;
}();

exports.default = Miner;
//# sourceMappingURL=Miner.js.map