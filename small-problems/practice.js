var headings = document.querySelectorAll('h1');
var headingsArray = Array.prototype.slice.call(headings);

var wordCounts = headingsArray.map(function(heading) {
  return heading.textContent.split(' ').length;
});

console.log(wordCounts);

console.log('HI')