class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		this.running = false;
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.reset = this.reset.bind(this);

		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
	}

	calculate() {
		this.times.miliseconds += 1;
		if (this.times.miliseconds >= 100) {
			this.times.seconds += 1;
			this.times.miliseconds = 0;
		}
		if (this.times.seconds >= 60) {
			this.times.minutes += 1;
			this.times.seconds = 0;
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
	}

	stop() {		
		if (!this.running) {
			return;
		} 

		this.running = false;
		clearInterval(this.watch);
	}

	reset() {
		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
		
		if (!this.running) {
			this.forceUpdate();
		}
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
				React.createElement('h2', {}, this.format(this.times))
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