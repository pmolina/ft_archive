function replaceLinks() {
  const links = document.getElementsByTagName('a');
  for (let link of links) {
    if (link.getAttribute('href') && link.getAttribute('href').startsWith('/')) {
      link.href = 'https://archive.ph/newest/https://www.ft.com' + link.getAttribute('href');
    }
  }
}

// Run the function when the page loads
replaceLinks();

// Use a MutationObserver to handle dynamically added content
const observer = new MutationObserver(replaceLinks);
observer.observe(document.body, { childList: true, subtree: true });

// Log a message to confirm the script is running
console.log('Financial Times Archive Redirector is active');