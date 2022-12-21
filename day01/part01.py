if __name__ == "__main__":
    with open('input') as f:
        lines = f.readlines()

        sum = 0
        highest = 0

        for line in lines:
            if line == '\n':
                highest = max(highest, sum)
                sum = 0
                continue

            sum += int(line) 

        print(highest)
