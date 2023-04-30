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

delete person.age;
console.log(person);

// check a property if it is exists
console.log('street' in address);
console.log('name' in address);

// you can put arrays inside objects
let course ={
    name : 'JS',
    url : 'www.cydeo.com',
    subjects : ['Objects', 'Arrays','Functions']
}

console.log(course);

//loop using keys of the object
for (let key in course) {
    console.log(key+" : "+course[key]);
}

// let's create an object with function, array, object in it
let myCar = {
    make : 'Dacia',
    color : 'orange',
    year : 2022,
    engine : {
        cylinders : 3,
        size : 1.0,
    },
    extras : ['AC','Cruise Control','Sound System'],
    drive : function () {
        console.log("Running on LPG");
    }
}

myCar.drive();
console.log(myCar.color); 
console.log(myCar.extras[1]);