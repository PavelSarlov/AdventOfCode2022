if __name__ == '__main__':
    with open('input') as f:
        lines = f.readlines()

        count = 0

        for line in lines:
            [e1, e2] = [[int(bound) for bound in elf.split('-')] for elf in line.strip().split(',')]

            if (e1[0] <= e2[1] and e1[1] >= e2[0]) or (e1[0] >= e2[1] and e1[1] <= e2[0]):
                count = count + 1
                
        print(count)
