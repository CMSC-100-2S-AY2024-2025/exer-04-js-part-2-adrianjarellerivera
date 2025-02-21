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



export { // export the functions
    generateUniqueID,
    //addAccount
};

