// Date: 2025/02/21
// Exercise 4: Simulating a password validation program in JavaScript

// Importing packages
import { v4 as uuid } from 'uuid';
import validator from 'validator';
import fs from 'fs';


function generateUniqueID(fname, lname){
    if ( typeof fname !== 'string' || typeof lname !== 'string') 
        return false;

    const uniqueString = uuid().split('-').join('').slice(0, 8);
    const uniqueID = fname[0].toLowerCase() + lname.toLowerCase() + uniqueString;
    return uniqueID;
}

console.log(generateUniqueID('John', 'Doe')); // jdoe3b4c5d
console.log(generateUniqueID('Jane', 'Smith')); // jsmith3b4c5d


