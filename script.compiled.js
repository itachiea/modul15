'use strict';

var sayHello = function sayHello() {
	return alert('Hello world');
};
sayHello();

//----------Zadania submoduł 15.4

//--- Zadanie 1

var string1 = 'mleko',
    string2 = 'jajko';

var strings = string1 + ', ' + string2; //interpolacja :)

//--- Zadanie 2

var x = 2,
    y = 5;

var multiply = function multiply() {
	var z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return console.log(z * c);
}; // (z = 1, c = 1) - domyślne parametry :)
multiply(x, y);

//--- Zadanie 3

var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	console.log(args);
	var i = 0;
	args.forEach(function (arg) {
		return i += arg;
	});
	return console.log(i / args.length);
};

//average(1, 7, 9, 11); // <----- do zadania 3 :)

//---Zadanie 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

//--- Zadanie 5

var dane = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = dane[2],
    lastName = dane[4];

console.log(firstName + ' ' + lastName);
