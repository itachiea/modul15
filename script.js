const sayHello = () => alert('Hello world');
sayHello();

//----------Zadania submoduł 15.4

//--- Zadanie 1

const string1 = 'mleko',
	string2 = 'jajko';

const strings = `${string1}, ${string2}`; //interpolacja :)

//--- Zadanie 2

const x = 2,
	y = 5;

const multiply = (z = 1, c = 1) => console.log(z * c); // (z = 1, c = 1) - domyślne parametry :)
multiply(x, y); 

//--- Zadanie 3

const average = (...args) => {
	console.log(args);
	let i = 0;
		args.forEach(arg => i += arg);
	return console.log(i / args.length);
}

//average(1, 7, 9, 11); // <----- do zadania 3 :)

//---Zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);


//--- Zadanie 5

const dane = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = dane;
console.log(firstName + ' ' + lastName);