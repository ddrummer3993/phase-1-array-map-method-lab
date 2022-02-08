const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased() {
  return tutorials.map((titleElement) => {
    const wordsArray = titleElement.split(' ');           //split the 'tutorials' array into individual word strings
    const secondIterator = wordsArray.map((word) => {     //creates variable to map through individiual array of words ** you are already inside the 'tutorials' array!! no need to repeatd the first .map again!
      let firstLetter = word[0].toUpperCase();            // upper case first letter of word
      let wordRemaining = word.slice(1);                  //grab the reamining letters in each word
      return firstLetter + wordRemaining;                 // return and join the firstLetter and wordRemaining
    });
    const finalArray = secondIterator.join(' ');
    return finalArray;
  });
}

console.log(titleCased());
