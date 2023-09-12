function arrayFilter(sentence) {
  // Convert the sentence string to an array of words
  var wordsArray = sentence.split(" ");

  // Create an empty array to hold words greater than 3 characters
  var newArray = [];

  // loop through the words array
  for (var i = 0; i < wordsArray.length; i++) {
    var word = wordsArray[i];

    // Check if the word length is greater than 3
    if (word.length > 3) {
      // Add the word to the new array
      newArray.push(word);
    }
  }

  // Join the elements of the new array back into a sentence
  var newSentence = newArray.join(" ");

  // Return the new sentence
  return newSentence;
}

var result = arrayFilter("London is a big city in the United Kingdom");
console.log(result);
