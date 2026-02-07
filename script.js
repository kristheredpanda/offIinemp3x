const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (isDarkMode)
{
    let link = document.querySelector("link[rel*='icon']");
    link.href = "resources/icons/music-icon-white.ico";
}
else
{
    let link = document.querySelector("link[rel*='icon']");
    link.href = "resources/icons/music-icon-black.ico";
}

function goTo(page)
{
    window.location.href = page;
}

function newTab(url)
{
    window.open(url, '_blank').focus();
}

// Function to trigger the download
function triggerDownload(fileName, fileSource)
{
    // Create an anchor element
    const a = document.createElement('a');
    // Set the file URL (must be same-origin)
    a.href = fileSource; 
    // Set the download attribute with a desired filename
    a.download = fileName;
    // Hide the element
    a.style.display = 'none';
    // Append the element to the body
    document.body.appendChild(a);
    // Simulate a click
    a.click();
    // Clean up the element after the click
    document.body.removeChild(a);
}