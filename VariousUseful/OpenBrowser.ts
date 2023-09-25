import * as fs from 'fs';
import open from 'open';

// HTML content with your message
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Display Message</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is your message displayed in the browser.</p>
</body>
</html>
`;

// Write the HTML content to a temporary file
const tempFileName = 'temp.html';
fs.writeFileSync(tempFileName, htmlContent);

// Open the default web browser with the temporary HTML file
open(tempFileName, { wait: false }).then(() => {
    console.log('Browser opened with message');
}).catch((error) => {
    console.error('Error opening browser:', error);
});
