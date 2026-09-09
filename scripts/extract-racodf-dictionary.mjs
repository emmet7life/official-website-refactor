import fs from 'node:fs';
import vm from 'node:vm';
const root = 'docs/research/www-racodf-com-3880565d/root-8a5edab2';
const source = fs.readFileSync(`${root}/language-source.js`, 'utf8');
const start = source.indexOf('const DICT = {') + 'const DICT = '.length;
const end = source.indexOf('\n      };', start) + '\n      }'.length;
const dictionary = vm.runInNewContext(`(${source.slice(start, end)})`, Object.create(null), {timeout: 1000});
fs.writeFileSync('src/components/sites/www-racodf-com-3880565d/root-8a5edab2/translations.json', JSON.stringify(dictionary, null, 2));
console.log(`Extracted ${Object.keys(dictionary).length} original translations.`);
