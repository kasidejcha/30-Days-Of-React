let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.split(' ');
words = words.map(word => word.replace('.',''));
words = words.map(word => word.replace(',',''));
console.log(words)
console.log(words.length)

