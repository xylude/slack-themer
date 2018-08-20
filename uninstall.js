import { OSX_INDEX_LOCATION, OSX_INTEROP_LOCATION } from './constants'
import fs from 'fs';

let interOp = fs.readFileSync(OSX_INTEROP_LOCATION);
let index = fs.readFileSync(OSX_INDEX_LOCATION);

interOp = interOp.toString();
index = index.toString();

const match = /\/\*-- BEGIN IMPLANT --\*\/((.|\s)*)\/\*-- END IMPLANT --\*\//
interOp = interOp.replace(match, '');
index = index.replace(match, '');

fs.writeFileSync(OSX_INTEROP_LOCATION, interOp);
fs.writeFileSync(OSX_INDEX_LOCATION, index);

console.log('theme uninstalled.');
