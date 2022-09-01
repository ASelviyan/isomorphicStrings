//PROBLEM
// You are given two strings
// You need to determine if the two strings are isomorphic 
// Isomorphic means that one character will replace another character and no other character! 
// if the letters where switched the words would stay the same (in spelling)
// no two characters will map to the same character but one character can map to it self

//PSEUDOCODE  
// create an object that will keep track of the pairing characters 
// make a for loop that will iterate through both of the string arrays 
// each time it iterate you will have conditional to do through 
// 1. check if the index we are at now ids in the object if not the add the two index values to the object as key value pairs
// 2. if the indices are already in the object check if the two indices have the correct pairing if they don't return false
// 3. if they do pair up keep iterating through the loop

//CONSTRAINTS
// the length of a string will always be be bigger then or equal to 1 and will be smaller then or equal to 5 * 10^4
// the length of the t string will always be the same length of the s string  
// s and t strings consist of any valid ascii characters 

// SOLUTION
var isIsomorphic = function (s, t) {
    // create an object that will keep track of the pairing characters 
    const pairing = {}
    // make a for loop that will iterate through both of the string arrays 
    for (let i = 0; i < s.length; i++) {
        // each time it iterate you will have conditional to do through 
        // 1. check if the index we are at now is in the object if not the add the two index values to the obejct as key value pairs
        if (!(s[i] in pairing)) {
            if (Object.values(pairing).includes(t[i])) {
                return false
            }
            pairing[s[i]] = t[i]
            // 2. if the indices are already in the object check if the two indeices have the corrent pairiing if they dont return false
        } else if (!(pairing[s[i]] === t[i])) {
            return false
        }

    }

    // 3. if they do pair up keep iterating through the loop and at the end retrun true
    return true
};