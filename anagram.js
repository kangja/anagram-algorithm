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

// CODE
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
  if (emptyArray.join("") == str1) { //emptyArray.join("") = listen
    return true
  } else {
    return false
  }
}


console.log(anagrams("abc", "cba"));
//   expect(anagrams('abc', 'cba')).toBe(true);

console.log(anagrams("abc", "aba"));
//   expect(anagrams('abc', 'aba')).toBe(false);

console.log(anagrams("abc", "cbaa"))
// it('does not count words with same letters but varying lengths as anagrams', () => {
//   expect(anagrams('abc', 'cbaa')).toBe(false);
// });

console.log(anagrams("aiuwehfxzxcvmneowieurahsde", "nsewceaerihfawzueouxdihmxv"))
// it('can handle large words with letters extremely scrambled', () => {
//   expect(anagrams('aiuwehfxzxcvmneowieurahsde', 'nsewceaerihfawzueouxdihmxv')).toBe(true);

console.log(anagrams("aiuwehfxzxcvmneowieurahsde", "nsewceaerihfawzueouxdihmxw"))
//   expect(anagrams('aiuwehfxzxcvmneowieurahsde', 'nsewceaerihfawzueouxdihmxw')).toBe(false);
// });


