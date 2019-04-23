function logInBox(text) {
  var length = text.length;

  console.log('+-' + '-'.repeat(length) + '-+');
  console.log('| ' + ' '.repeat(length) + ' |');
  console.log('| ' + text + ' |');
  console.log('| ' + ' '.repeat(length) + ' |');
  console.log('+-' + '-'.repeat(length) + '-+');
}

logInBox('To boldly go where no one has gone before.');
logInBox('');