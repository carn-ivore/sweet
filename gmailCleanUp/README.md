# GmailAutomationScripts

This repository contains Google Apps Scripts designed to automate common Gmail tasks, saving you time and effort.

## Scripts

### `findUnsubscribeSenders.gs`

This script scans your Gmail inbox and identifies unique senders with "unsubscribe" links or keywords. It then creates a Google Doc with links to the most recent email from each sender, allowing you to quickly unsubscribe. It also creates a link that will search for all emails from that sender.

### `deleteUnsubscribedSenders.gs`

This script allows you to delete all emails from senders you've unsubscribed from. You will need to edit the script to add the senders' email addresses to the `unsubscribedSenders` array.

## Installation and Usage

1.  **Open Google Apps Script:**
    * Open a new browser tab or window.
    * Go to [script.google.com](https://script.google.com).
    * Make sure you are logged into the same Google account as your Gmail.

2.  **Create a New Project (if needed):**
    * If you haven't used Google Apps Script before, a new, blank project will open. If you have, you may need to click "New Project".

3.  **Create the Script Files:**
    * By default, your project will have a file named "Code.gs". You can rename this, or delete it and create a new file.
    * To create a new file, click the "+" button next to "Files" in the left sidebar, and choose "Script".
    * Name one file `findUnsubscribeSenders.gs` and the other `deleteUnsubscribedSenders.gs`.
    * Copy the contents of the respective script file from this repository and paste it into the editor.
    * Click the save icon (💾).

4.  **Authorize the Scripts:**
    * When you run either of the scripts for the first time, you will be prompted to authorize them.
    * To run a script, select the function you want to run from the dropdown menu in the script editor (e.g., `findUnsubscribeSenders`).
    * Click the "Run" button (▶️).
    * Follow the on-screen prompts to grant the necessary permissions.

5.  **Follow the Script's Instructions:**
    * For `findUnsubscribeSenders.gs`, open the created Google Doc, and follow the links to unsubscribe, and then the search links to manually delete the emails.
    * For `deleteUnsubscribedSenders.gs`, edit the script with the needed email addresses in the `unsubscribedSenders` array, and then run it.

## Best Practices

* **Authorization:** Google Apps Script requires authorization to access your Gmail. Always review the permissions requested by the script.
* **Testing:** Test scripts on a small sample of emails before running them on your entire inbox.
* **Error Handling:** For production use, consider adding error handling and more robust logic to the scripts.
* **Rate Limits:** Be mindful of Gmail's API rate limits, especially when processing large volumes of emails.
* **Manual Review:** Always review emails before deleting them, even when using automated scripts.
* **Exception Lists:** When using deletion scripts, maintain exception lists of senders you always want to keep emails from.

## Reporting Issues

If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository. Provide detailed information about the problem, including:

* The script you were using.
* The steps you took.
* Any error messages you received.
* Your Operating system and browser.

## Contributing

Contributions are welcome! If you'd like to contribute to this repository, please follow these steps:

1.  **Fork the Repository:** Fork the repository to your own GitHub account.
2.  **Create a Branch:** Create a new branch for your changes (e.g., `feature/new-script`).
3.  **Make Changes:** Make your changes and commit them with clear and descriptive commit messages.
4.  **Submit a Pull Request:** Submit a pull request to the `main` branch of this repository.

Please ensure your code follows best practices and includes appropriate comments.
