function findUnsubscribeSenders() {
  var threads = GmailApp.search('in:inbox');
  var senders = {};

  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];
      var from = message.getFrom();
      var body = message.getPlainBody();

      if (!senders[from]) {
        if (body.toLowerCase().indexOf('unsubscribe') !== -1) {
          senders[from] = threads[i].getPermalink(); // Corrected line
        }
      }
    }
  }

  createDoc(senders);
}

function createDoc(senders) {
  var doc = DocumentApp.create('Unsubscribe and Delete');
  var body = doc.getBody();
  body.appendParagraph('Senders with Unsubscribe Options:');

  for (var sender in senders) {
    var unsubscribeLink = senders[sender];
    var searchLink =
      'https://mail.google.com/mail/u/0/#search/from%3A' +
      encodeURIComponent(sender) +
      '+in%3Ainbox&cv=8';

    var paragraph = body.appendParagraph(sender + ": ");
    paragraph.appendText("Unsubscribe").setLinkUrl(unsubscribeLink);
    paragraph.appendText(" | ");
    paragraph.appendText("Delete All").setLinkUrl(searchLink);
  }
}
function removeCv8FromLinks(docId) {
  var doc = DocumentApp.openById(docId);
  var body = doc.getBody();
  var paragraphs = body.getParagraphs();

  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    if (paragraph.getLinkUrl()) {
      var currentUrl = paragraph.getLinkUrl();
      var newUrl = currentUrl.replace('&cv=8', '');
      if (newUrl !== currentUrl) {
        paragraph.setLinkUrl(newUrl);
      }
    }
    var runs = paragraph.getRuns();
    for(var j = 0; j < runs.length; j++){
      var run = runs[j];
      if(run.getLinkUrl()){
        var currentRunUrl = run.getLinkUrl();
        var newRunUrl = currentRunUrl.replace('&cv=8', '');
        if(newRunUrl !== currentRunUrl){
          run.setLinkUrl(newRunUrl);
        }
      }
    }
  }
}

function testRemoveCv8() {
  var docId = 'YOUR_DOCUMENT_ID'; // Replace with your document ID
  removeCv8FromLinks(docId);
}
