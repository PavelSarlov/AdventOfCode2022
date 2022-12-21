shapeToScoreC = {'A': 0, 'B': 1, 'C': 2}

if __name__ == "__main__":
    with open('input') as f:
        lines = f.readlines()

        score = 0

        for line in lines:
            [c, p] = line.strip().split(' ')

            if p == 'X':
                score += (shapeToScoreC[c] - 1) % 3 + 1
            elif p == 'Y':
                score += shapeToScoreC[c] + 1
                score += 3
            else:
                score += (shapeToScoreC[c] + 1) % 3 + 1
                score += 6

        print(score)
