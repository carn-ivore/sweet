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
```javascript
function removeParameterFromLinks() {
  // Get the active document
  var doc = DocumentApp.getActiveDocument();
  
  // Get the document body
  var body = doc.getBody();
  
  // Process all paragraphs in the document
  var paragraphs = body.getParagraphs();
  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    var text = paragraph.editAsText();
    
    // Process each character in the paragraph
    for (var j = 0; j < text.getText().length; j++) {
      var url = text.getLinkUrl(j);
      
      // If there's a URL and it contains "&cv=8"
      if (url && url.indexOf("&cv=8") !== -1) {
        // Find the range for this URL
        var startPos = j;
        while (j < text.getText().length && text.getLinkUrl(j) === url) {
          j++;
        }
        var endPos = j - 1;
        
        // Create the new URL without "&cv=8"
        var newUrl = url.replace(/&cv=8/g, "");
        
        // Replace the old URL with the new one for this range
        text.setLinkUrl(startPos, endPos, newUrl);
      }
    }
  }
  
  Logger.log("All '&cv=8' parameters have been removed from URLs.");
}
```
