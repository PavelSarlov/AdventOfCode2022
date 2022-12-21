def getPriority(char):
    return (ord(char) - ord('A') + 26 if char.isupper() else (ord(char) - ord('a'))) + 1

if __name__ == '__main__':
    with open('input') as f:
        lines = f.readlines()

        sum = 0

        for i in range(int(len(lines)/3)):
            duplicates = [set()]*3
            elfs = [set(line.strip()) for line in lines[i*3:(i+1)*3]]

            for b in elfs[0]:
                if b in elfs[1] and b in elfs[2]:
                    print(b)
                    sum += getPriority(b)

        print(sum)

