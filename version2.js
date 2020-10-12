function anagrams(str1, str2) {
  let hash1 = {}

  for (let i = 0; i < str1.length; i++) {
    if (hash1[str1[i]]) {
      hash1[str1[i]] += 1
    }
    else {
      hash1[str1[i]] = 1
    }
  }
  
  for (let i = 0; i < str2.length; i++) {
    if (hash1[str2[i]]) {
      hash1[str2[i]] -= 1
    }
    else {
      hash1[str2[i]] = 1
    }
  }

  for (const key in hash1) {
    if (hash1[key] !== 0) {
      return false
    }
  }
  return true
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