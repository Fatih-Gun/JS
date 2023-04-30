let person = {
    firstName : "Joe",
    lastName : 'Doe'
}

console.log(typeof person);
console.log(person);
console.log(person.firstName);

let address = {
    'building no' : 5555,
    street : 'Keowee',
    state : 'Kentucky'
}

console.log(address);
console.log(address['building no']);
console.log(address['street']);

// add new property to object
person.age = 30;
console.log(person);
