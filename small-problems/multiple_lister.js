/*


> var lister = makeMultipleLister(13);
> lister();
13
26
39
52
65
78
91


*/

function makeMultipleLister(number) {
  return function () {
    var i;
    for (i = number; i < 100; i += number) {
      console.log(i);
    }
  }
}

var lister = makeMultipleLister(13);
lister();

