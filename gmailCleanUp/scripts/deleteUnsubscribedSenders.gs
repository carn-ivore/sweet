function deleteUnsubscribedSenders() {
  var unsubscribedSenders = [
    // Add the email addresses of the senders you've unsubscribed from here.
    // Example: "newsletter@example.com", "promotions@shop.com"
  ];
  var exceptionSenders = [
    //Add any senders you always want to keep emails from here.
    //Example: "businesscontact@work.com"
  ];

  for (var i = 0; i < unsubscribedSenders.length; i++) {
    var sender = unsubscribedSenders[i];
    var threads = GmailApp.search('from:' + sender);

    for (var j = 0; j < threads.length; j++) {
      var messages = threads[j].getMessages();
      var keep = false;
      for(var k = 0; k < exceptionSenders.length; k++){
        if(messages[0].getFrom() == exceptionSenders[k]){
          keep = true;
        }
      }
      if(!keep){
        threads[j].moveToTrash();
      }
    }
  }
}
