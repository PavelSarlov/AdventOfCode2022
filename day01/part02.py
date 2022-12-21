if __name__ == "__main__":
    with open('input') as f:
        lines = f.readlines()

        sum = 0
        sumlist = []

        for line in lines:
            if line == '\n':
                sumlist.append(sum)
                sum = 0
                continue

            sum += int(line) 

        print(sorted(sumlist)[-3:])
