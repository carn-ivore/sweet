# GmailAutomationScripts

This repository contains Google Apps Scripts designed to automate common Gmail tasks, saving you time and effort.

## Scripts

### `findUnsubscribeSenders.gs`

This script scans your Gmail inbox and identifies unique senders with "unsubscribe" links or keywords. It then creates a Google Doc with links to the most recent email from each sender, allowing you to quickly unsubscribe. It also creates a link that will select all emails from that sender for easy deletion.

### `deleteUnsubscribedSenders.gs`

This script allows you to delete all emails from senders you've unsubscribed from. You will need to edit the script to add the senders email addresses to the unsubscribedSenders array.

## Installation and Usage

1.  **Open Google Apps Script:**
    * Go to your Gmail account.
    * Click the settings gear icon (⚙️) in the top right.
    * Click "See all settings."
    * Click the "Advanced" tab.
    * Make sure "Google Apps Script" is enabled.
    * Click tools, then script editor.
2.  **Copy and Paste:**
    * Copy the contents of the desired script file (e.g., `findUnsubscribeSenders.gs`) from this repository.
    * Paste the code into the Google Apps Script editor.
3.  **Save the Script:**
    * Click the save icon (💾) and give your script a descriptive name (e.g., "Find Unsubscribe Senders").
4.  **Run the Script:**
    * Select the desired function from the dropdown menu (e.g., `findUnsubscribeSenders`).
    * Click the "Run" button (▶️).
    * You will be prompted to authorize the script. Grant the necessary permissions.
5.  **Follow the Script's Instructions:**
    * For `findUnsubscribeSenders.gs` open the created google doc, and follow the links to unsubscribe, and then the delete all links.
    * For `deleteUnsubscribedSenders.gs` edit the script with the needed email addresses, and then run it.

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

## Missing Pieces Filled In:

* **Clearer Structure:** The repository is organized for easy navigation and understanding.
* **Detailed Instructions:** The `README.md` provides comprehensive instructions for installation, usage, and best practices.
* **Contribution Guidelines:** Clear instructions for reporting issues and submitting pull requests are included.
* **Best Practices:** The `README.md` emphasizes best practices for using the scripts, including authorization, testing, and error handling.
* **`.gitignore`:** Added to ignore google app script settings files.

This comprehensive setup will provide a solid foundation for your Gmail automation scripts repository.

