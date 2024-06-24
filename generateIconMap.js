const fs = require('fs');
const path = require('path');
const svgDir = path.join(__dirname, 'svg');
const outputFile = path.join(__dirname, 'iconMap.js');

fs.readdir(svgDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const svgFiles = files.filter(file => path.extname(file).toLowerCase() === '.svg');
  let iconMap = {};

  svgFiles.forEach(file => {
    const filePath = path.join(svgDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const minifiedContent = content.replace(/\s+/g, ' ').trim();
    const iconName = path.basename(file, '.svg');
    
    iconMap[iconName] = minifiedContent;
  });

  const output = `const iconMap = ${JSON.stringify(iconMap, null, 2)};\n\nexport default iconMap;`;

  fs.writeFile(outputFile, output, err => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log(`Successfully created ${outputFile}`);
    }
  });
});