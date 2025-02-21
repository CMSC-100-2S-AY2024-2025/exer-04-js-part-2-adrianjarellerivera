// Date: 2025/02/21
// Exercise 4: Simulating a password validation program in JavaScript

// Packages
import { v4 as uuid } from 'uuid';
import validator from 'validator';
import fs from 'fs';

function generateUniqueID(fname, lname){

    if ( typeof fname !== 'string' || typeof lname !== 'string') // check if the input is a string
        return false;

    const uniqueString = uuid().split('-').join('').slice(0, 8); // generate a unique string using the uuid package
    const uniqueID = fname[0].toLowerCase() + lname.toLowerCase() + uniqueString; // concatenate based on the format provided 

    return uniqueID; 
}

function addAccount(array_info){

    if (!Array.isArray(array_info)) return false; // check if the input is an array
    if (array_info.length < 4) return false; // check if the array has at least 4 elements
    if (array_info.length > 4) { 
        array_info = array_info.slice(0, 4); // if the array exceeds the 4 elements, only the first 4 elements will be considered
    }

    const [fname, lname, email, age] = array_info; // array destructuring

    if (typeof fname !== 'string' || typeof lname !== 'string' || typeof email !== 'string' || !Number.isInteger(age)) 
        return false; // check if the elements are strings

    if (!validator.isEmail(email)) return false; // check if the email is valid
    if (age < 18) return false; // check if the age is greater than or equal to 18

    const uniqueID = generateUniqueID(fname, lname); // generate a unique ID using the function generateUniqueID
    const userData = `${fname},${lname},${email},${age},${uniqueID}\n`; // format the user data that will be written to the file

   
    fs.appendFileSync('users.txt', userData); // append the user data to the file
    return true; // only return true if all the conditions are met
    
}

export { // export the functions
    generateUniqueID,
    addAccount
};

