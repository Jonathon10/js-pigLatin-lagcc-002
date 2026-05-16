'use strict';

let translateWord = function(word) {

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let index = 0;

  while (
    index < word.length &&
    (!vowels.includes(word[index]) ||
     (word[index] === 'u' && word[index - 1] === 'q'))
  ) {
    index++;
  }

  if (index === 0) {
    return word + "ay";
  }

  return word.slice(index) + word.slice(0, index) + "ay";
};

let translate = function(phrase) {

  return phrase
    .split(" ")
    .map(translateWord)
    .join(" ");
};

module.exports = translate;