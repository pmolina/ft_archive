# Financial Times Archived Redirector

## Description

Financial Times Archived Redirector is a Chrome extension that automatically replaces links on the Financial Times website (ft.com) with their corresponding archived versions from archive.ph. This extension helps users access FT articles through archive.ph, potentially bypassing paywalls and preserving article content.

## Features

- Automatically converts internal FT links to their archive.ph equivalents
- Works on all ft.com pages
- Handles dynamically loaded content
- Lightweight and easy to use

## How It Works

When you visit any page on ft.com, the extension:

1. Identifies all links (`<a>` tags) on the page
2. Checks if the link is an internal FT link (starts with '/')
3. If so, it replaces the link's `href` attribute with an archive.ph URL that includes the original FT URL
4. Continues to monitor the page for any newly added links and processes them as well

## Installation

1. Clone this repository or download the source code
2. Open Chrome and go to `chrome://extensions`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the directory containing the extension files
5. The extension icon should now appear in your Chrome toolbar

## Usage

Once installed, the extension works automatically on all ft.com pages. You don't need to take any additional action. Simply browse the Financial Times website as usual, and all internal links will be converted to archive.ph links.

## Privacy and Permissions

This extension only runs on ft.com domains and does not collect or transmit any user data. It requires the following permissions:

- `scripting`: To run the content script on ft.com pages
- `host_permissions`: To operate on all ft.com subdomains

## Disclaimer

This extension is for educational purposes only. Users should respect the Financial Times' terms of service and copyright policies.

## Contributing

Contributions to improve the extension are welcome. Please feel free to submit issues or pull requests.

## License

[MIT License](LICENSE)
