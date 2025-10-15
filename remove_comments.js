const fs = require('fs');
const path = require('path');

function removeComments(content) {
  // Remove single-line comments (//)
  content = content.replace(/^\s*\/\/.*$/gm, '');
  
  // Remove multi-line comments (/* */)
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  
  // Remove empty lines that were left after comment removal
  content = content.replace(/^\s*$/gm, '');
  
  return content;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const cleanedContent = removeComments(content);
    fs.writeFileSync(filePath, cleanedContent);
    console.log(`Processed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      processFile(filePath);
    }
  });
}

// Process the src directory
processDirectory('./src');
console.log('Comment removal completed!');
