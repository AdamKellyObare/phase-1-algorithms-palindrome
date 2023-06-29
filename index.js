function isPalindrome(word) {
  // Write your algorithm here
  const formattedWord =  word.replace(/[^a-zA-Z]/g, '').toLowerCase();

  const reversWord = formattedWord.split('').reverse().join('');

  return formattedWord === reversWord;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
