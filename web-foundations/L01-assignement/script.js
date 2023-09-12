function stringCounter(sentence) {
  //split the sentence into an array of string
  var wordsArray = sentence.split(" ");
  //output of the number of words in the sentence
  console.log("No. of words: ", wordsArray.length);
  // the output of characters in the sentence
  console.log("No. of characters: ", sentence.length);
}

// TEST CASE 1
console.log("The First sentence: ");
let sentence1 =
  "The largest living thing on earth is a giant sequoia named General Sherman";
stringCounter(sentence1);
console.log("The Second sentence: ");
// TEST CASE 2
let sentence2 = "A sunset on Mars is blue";
stringCounter(sentence2);
