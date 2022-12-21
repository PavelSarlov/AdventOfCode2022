shapeToScoreP = {'X': 1, 'Y': 2, 'Z': 3}
shapeToScoreC = {'A': 1, 'B': 2, 'C': 3}

if __name__ == "__main__":
    with open('input') as f:
        lines = f.readlines()

        score = 0

        for line in lines:
            [c, p] = line.strip().split(' ')

            if shapeToScoreC[c] == shapeToScoreP[p]:
                score += 3
            if (c == 'A' and p == 'Y') or (c == 'B' and p == 'Z') or (c == 'C' and p == 'X'):
                score += 6

            score += shapeToScoreP[p]

        print(score)
