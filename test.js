import { generateUniqueID, addAccount } from './index.js';


// Test cases for generateUniqueID
console.log(generateUniqueID('John', 'Doe')); 
console.log(generateUniqueID('Jane', 'Smith'));


// Test cases for addAccount
console.log(addAccount(['John', 'Doe', 'jsajdad', 25])); // false
console.log(addAccount(['John', 'Doe', 'avrivera1@gmail.com', 25])); // true
console.log(addAccount(['Alice', 'Johnson', 'alice.johnson@example.com', 30])); // true
console.log(addAccount(['Hannah', 'Melo-Rivera', 'hannahmeloR@yahoo.com', 17])); // false