// Write a function, `anagrams(str1, str2)`, that takes in two words and returns 
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this WITHOUT using Array.prototype.sort.
// 
// Examples:
// anagrams('listen', 'silent') => true
// anagrams('listen', 'potato') => false



// PSEUDOCODE
// check if two words have the matching alphabets. if they do, return true. 

// 
function anagrams(str1, str2) {
  let emptyArray = [];
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        emptyArray.push(str2[j])
      }
    }
  }
  // return emptyArray
  if (emptyArray.join("") == str1) {
    return true
  } else {
    return false
  }
}

console.log(anagrams('listen', 'potato'))
