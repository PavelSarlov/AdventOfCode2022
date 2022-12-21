import math

if __name__ == '__main__':
    with open('input') as f:
        lines = f.readlines()

        sum = 0

        for line in lines:
            line = line.strip()
            [c1, c2] = [line[:math.floor(len(line) / 2)], line[math.floor(len(line) / 2):]]

            s1 = set(c1)
            s2 = set(c2)

            duplicates = []

            for char in s1:
                if char in s2:
                    duplicates.append(char)

            for char in duplicates:
                sum += (ord(char) - ord('A') + 26 if char.isupper() else (ord(char) - ord('a'))) + 1

        print(sum)

