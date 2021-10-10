const person = [ { name: "Angelina Jolie", age: 80 },
{ name: "Eric Jones", age: 2 }, 
{ name: "Paris Hilton", age: 5 },
{ name: "Kayne West", age: 16 },
{ name: "Bob Ziroll", age: 100 } ]

const checkIfPersonCanWatch = person.map(person => person.age > 18 ? `${person.name} can go to The Matrix` : `${person.name} is under age!!`);

checkIfPersonCanWatch                            