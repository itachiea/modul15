'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var times = {
	minutes: 0,
	seconds: 0,
	miliseconds: 0
};

var Stopwatch = function (_React$Component) {
	_inherits(Stopwatch, _React$Component);

	function Stopwatch() {
		_classCallCheck(this, Stopwatch);

		var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this));

		_this.running = false;
		_this.start = _this.start.bind(_this);
		return _this;
	}

	_createClass(Stopwatch, [{
		key: 'calculate',
		value: function calculate() {
			times.miliseconds += 1;
			if (times.miliseconds >= 100) {
				times.seconds += 1;
				times.miliseconds = 0;
			}
			if (times.seconds >= 60) {
				times.minutes += 1;
				times.seconds = 0;
			}
		}
	}, {
		key: 'step',
		value: function step() {
			this.calculate();
			this.forceUpdate();
		}
	}, {
		key: 'start',
		value: function start() {
			var _this2 = this;

			if (!this.running) {
				this.running = true;
				this.watch = setInterval(function () {
					return _this2.step();
				}, 10);
			}
			//console.log(times);
		}
	}, {
		key: 'stop',
		value: function stop() {
			if (!this.running) {
				return;
			} else {
				this.running = false;
				clearInterval(this.watch);
			}
		}
	}, {
		key: 'reset',
		value: function reset() {
			times = {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			};
		}
	}, {
		key: 'format',
		value: function format(times) {
			return pad0(times.minutes) + ':' + pad0(times.seconds) + ':' + pad0(Math.floor(times.miliseconds));
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement('div', { className: 'mójłocz' }, React.createElement('button', { id: 'start', onClick: this.start }, 'start'), React.createElement('button', { id: 'stop', onClick: this.stop }, 'stop'), React.createElement('button', { id: 'reset', onClick: this.reset }, 'reset'), React.createElement('h2', {}, this.format(times)));
		}
	}]);

	return Stopwatch;
}(React.Component);

function pad0(value) {
	var result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

var stopwatch = new React.createElement(Stopwatch);
var renders = ReactDOM.render(stopwatch, document.getElementById('app'));
