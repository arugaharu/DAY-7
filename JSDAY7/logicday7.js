/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
  let objekchar = {};//deklarasi objek untuk char

  for (let i = 0; i < str.length; i++) {
      let char = str[i];//memsaukan char dalm string

      if (objekchar[char]) {
          return false;//char tdk unik krn sdh ada di objekchar
      }
      objekchar[char] = true;//true karena blm ada di objekchar
  }
  return true;
}

console.log(hasUniqueCharacters("abcdefg")); 
console.log(hasUniqueCharacters("hello")); 