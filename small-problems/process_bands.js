var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(function (band) {
    var capitalizedName = capitalizePhrase(band.name);
    var newBandName = removeDots(capitalizedName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    };
  });
}

function updateCountry(band) {
  return band.country = 'Canada';
}

function capitalizePhrase(phrase) {
  var wordArr = phrase.split(' ');

  var upperCasePhrase = wordArr.map(function (word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
  }).join(' ');

  return upperCasePhrase;
}

function removeDots(string) {
  return string.replace(/\./g, '');
}

console.log(processBands(bands));
console.log(bands);