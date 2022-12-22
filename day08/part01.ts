import * as fs from 'fs';

let forest: string[] = [];

const lines = fs
  .readFileSync('input', 'utf8')
  .split('\n')
  .map((line) => line.trim());

lines.forEach((line) => {
  forest.push(line);
});


