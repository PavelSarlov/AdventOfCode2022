if __name__ == '__main__':
    with open('input') as f:
        lines = f.readlines()

        for line in lines:
            line = line.strip()

            for i in range(int(len(line)) - 4):
                if len(set(line[i:i+4])) == 4:
                    print(i+4)
                    break;
            
