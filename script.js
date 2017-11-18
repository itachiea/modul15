let times = {
	minutes: 0,
	seconds: 0,
	miliseconds: 0
};

class Stopwatch extends React.Component {
	constructor() {
		super();
		this.running = false;
		this.start = this.start.bind(this);
	}

	calculate() {
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
	
	step() {
		this.calculate();
		this.forceUpdate();
	}

	start() {
		if (!this.running) {
			this.running = true;
			this.watch = setInterval(() => this.step(), 10);
		}
		//console.log(times);
	}

	stop() {
		if (!this.running) {
			return;
		} else {
			this.running = false;
			clearInterval(this.watch);
		}
	}

	reset() {
		times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
	}

	format(times) {
		return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	render() {
		return(
			React.createElement('div', {className: 'mójłocz'}, 
				React.createElement('button', {id: 'start', onClick: this.start}, 'start'),
				React.createElement('button', {id: 'stop', onClick: this.stop}, 'stop'),
				React.createElement('button', {id: 'reset', onClick: this.reset}, 'reset'),
				React.createElement('h2', {}, this.format(times))
			)	
		);
	}
}

function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

const stopwatch = new React.createElement(Stopwatch);
const renders = ReactDOM.render(stopwatch, document.getElementById('app'));