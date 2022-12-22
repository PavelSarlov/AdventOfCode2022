import * as fs from 'fs';

const forest: number[][] = [];

const lines = fs
  .readFileSync('input', 'utf8')
  .split('\n')
  .map((line) => line.trim());

lines.forEach((line) => {
  forest.push(line.split('').map((char) => Number(char)));
});

let visible = 0;

for (let i = 0; i < forest.length; i++) {
  for (let j = 0; j < forest[i].length; j++) {
    const visibleCardinals = [true, true, true, true];

    for (let k = j + 1; k < forest[i].length; k++) {
      if (forest[i][k] >= forest[i][j]) {
        visibleCardinals[0] = false;
        break;
      }
    }

    for (let k = j - 1; k >= 0; k--) {
      if (forest[i][k] >= forest[i][j]) {
        visibleCardinals[1] = false;
        break;
      }
    }

    for (let k = i + 1; k < forest.length; k++) {
      if (forest[k][j] >= forest[i][j]) {
        visibleCardinals[2] = false;
        break;
      }
    }

    for (let k = i - 1; k >= 0; k--) {
      if (forest[k][j] >= forest[i][j]) {
        visibleCardinals[3] = false;
        break;
      }
    }

    visible += Number(visibleCardinals.some((_) => _));
  }
}

console.log(visible);
