import * as fs from 'fs';

const forest: number[][] = [];

const lines = fs
  .readFileSync('input', 'utf8')
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line !== '');

lines.forEach((line) => {
  forest.push(line.split('').map((char) => Number(char)));
});

let highestScore = 0;

for (let i = 1; i < forest.length - 1; i++) {
  for (let j = 1; j < forest[i].length - 1; j++) {
    let score = 1;

    for (let k = j + 1; k < forest[i].length; k++) {
      if (forest[i][k] >= forest[i][j] || k === forest[i].length - 1) {
        score *= k - j;
        break;
      }
    }

    for (let k = j - 1; k >= 0; k--) {
      if (forest[i][k] >= forest[i][j] || k === 0) {
        score *= j - k;
        break;
      }
    }

    for (let k = i + 1; k < forest.length; k++) {
      if (forest[k][j] >= forest[i][j] || k === forest.length - 1) {
        score *= k - i;
        break;
      }
    }

    for (let k = i - 1; k >= 0; k--) {
      if (forest[k][j] >= forest[i][j] || k === 0) {
        score *= i - k;
        break;
      }
    }

    highestScore = Math.max(score, highestScore);
  }
}

console.log(highestScore);
