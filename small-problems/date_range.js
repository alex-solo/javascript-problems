function createDateObject(string) {
  var dateComponents = string.match(/[0-9]{2}-[0-9]{2}-[0-9]{4}$/g)[0].split('-');
  var month = parseInt(dateComponents[0], 10);
  var day = parseInt(dateComponents[1]);
  var year = parseInt(dateComponents[2]);

  return new Date(year, month, day);
}

function getDateRange(emailMessages) {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var sortedDates = emailMessages.map(function (emailObj) {
    return createDateObject(emailObj.date);
  }).sort(function (date1, date2) {
    return date1 - date2;
  });

  var earliest = sortedDates[0];
  var latest = sortedDates[sortedDates.length - 1];
  var earliestStr = days[earliest.getDay()] + ' ' + months[earliest.getMonth()] + ' ' + earliest.getDate() + ' ' + earliest.getFullYear();
  var latestStr = days[latest.getDay()] + ' ' + months[latest.getMonth()] + ' ' + latest.getDate() + ' ' + latest.getFullYear();

  return earliestStr + ' - ' + latestStr;
}

function mailCount(emailData) {
  var emailMessages = emailData.split('##||##');
  var emailComponents;
  var numberEmails;
  var dateRange;

  emailMessages = emailMessages.map(function (email) {
    emailComponents = email.split('#/#');
    
    var eachEmail = {};

    eachEmail.sender = emailComponents[0];
    eachEmail.subject = emailComponents[1];
    eachEmail.date = emailComponents[2];
    eachEmail.recipient = emailComponents[3];
    eachEmail.body = emailComponents[4];

    return eachEmail;
  });

  numberEmails = emailMessages.length;
  dateRange = getDateRange(emailMessages);

  console.log('Count of Email: ' + numberEmails);
  console.log('Date Range: ' + dateRange);
}

// console.log(mailCount(emailData));

mailCount(emailData)

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016