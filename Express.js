const express = require('express');
const path = require('path');
const app = express();

// Define the build directory
const buildPath = path.join(__dirname, 'build');

// Serve static files from the React build folder
app.use(express.static(buildPath));

// Explicitly serve sitemap.xml and robots.txt
app.get(['/sitemap.xml', '/robots.txt'], (req, res) => {
  const filePath = path.join(buildPath, req.path);
  
  // Check if file exists before sending
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(`Error serving file: ${filePath}`, err);
      res.status(404).send('File not found');
    }
  });
});

// Handle React routing (serve index.html for all unmatched routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
