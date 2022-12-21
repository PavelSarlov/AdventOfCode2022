if __name__ == '__main__':
    stacks = [[] for _ in range(9)]
    stacks[0] = ['Q','F','M','R','L','W','C','V']
    stacks[1] = ['D','Q','L']
    stacks[2] = ['P','S','R','G','W','C','N','B']
    stacks[3] = ['L','C','D','H','B','Q','G']
    stacks[4] = ['V','G','L','F','Z','S']
    stacks[5] = ['D','G','N','P']
    stacks[6] = ['D','Z','P','V','F','C','W']
    stacks[7] = ['C','P','D','M','S']
    stacks[8] = ['Z','N','W','T','V','M','P','C']

    with open('input') as f:
        lines = f.readlines()

        for line in lines:
            actions = line.strip().split(' ')
            
            if actions[0] != 'move': 
                continue

            fr = int(actions[3]) - 1
            to = int(actions[5]) - 1

            for i in range(int(actions[1])):
                if len(stacks[fr]) == 0:
                    break
                stacks[to].append(stacks[fr].pop())
                
    print(''.join([s[-1] if len(s) > 0 else ' ' for s in stacks]))
