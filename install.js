import themes from './themes/themes'
import { getTheme } from './themes/getTheme'
import implant from './codeImplant/implant'
import { OSX_INDEX_LOCATION, OSX_INTEROP_LOCATION } from './constants'

import fs from 'fs'

const themeName = process.argv[2] ? process.argv[2] : 'dark';

const theme = themes.filter(theme => theme.name === themeName)[0];
if(!theme) {
	console.log('theme not found.\n');
	process.exit();
}

const themeCss = getTheme(theme);
const themeJs = implant(themeCss);

let interOp = fs.readFileSync(OSX_INTEROP_LOCATION);
let index = fs.readFileSync(OSX_INDEX_LOCATION);

interOp = interOp.toString();
index = index.toString();

if(interOp.indexOf('/*-- BEGIN IMPLANT --*/') < 0) {
	interOp = interOp + `\n${themeJs}`
}

if(index.indexOf('/*-- BEGIN IMPLANT --*/') < 0) {
	index = index + `\n${themeJs}`
}

fs.writeFileSync(OSX_INTEROP_LOCATION, interOp);
fs.writeFileSync(OSX_INDEX_LOCATION, index);

console.log('installed.');
