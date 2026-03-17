const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf-8');
const startIndex = html.indexOf('const ERAS = [');
const endIndex = html.indexOf('// ═══════════════════════════════════════════════════\n//  STATE');

if (startIndex !== -1 && endIndex !== -1) {
  const erasStr = html.substring(startIndex, endIndex).trim();
  // Replace `const ERAS = ` with `export const ERAS: Era[] = `
  let dataContent = `import { Era } from './types';\n\n`;
  dataContent += erasStr.replace('const ERAS = [', 'export const ERAS: Era[] = [');
  
  // Remove the trailing semicolon if it exists and add it properly
  if (dataContent.endsWith(';')) {
      dataContent = dataContent.slice(0, -1);
  }
  dataContent += ';\n';

  fs.writeFileSync('src/data.ts', dataContent);
  console.log('Successfully extracted ERAS to src/data.ts');
} else {
  console.error('Could not find ERAS array in index.html');
}
