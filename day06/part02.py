if __name__ == '__main__':
    with open('input') as f:
        lines = f.readlines()

        for line in lines:
            line = line.strip()

            for i in range(int(len(line)) - 14):
                if len(set(line[i:i+14])) == 14:
                    print(i+14)
                    break;
            
