const user = {name: 'Michal'};

const user2 = user;

user2.lastName = 'Kowalsky';

// Spread operator with objects
// This performs so called shallow copy of the user
const myNewUser = { age: 33, ...user };

console.log(user)

console.log(myNewUser)


// Spread operator with arrays:
const array = [1, 2, 3, 4];

console.log([4, 5, 6, ...array ])
