import * as fs from 'fs';

class FileNode {
  name: string;
  size: number;

  constructor(name: string, size = 0) {
    this.name = name;
    this.size = size;
  }

  toString() {
    return `${this.name} ${this.size}`;
  }
}

class DirNode extends FileNode {
  parent: DirNode | null = null;
  children: FileNode[];

  constructor(
    name: string,
    parent: DirNode | null = null,
    size = 0,
    children = []
  ) {
    super(name, size);
    this.children = children;
    this.parent = parent;
  }
}

function findSmallestHighEnough(cwd: DirNode, needed: number): number[] {
  let result = [];

  for (const child of cwd.children) {
    if (child instanceof DirNode) {
      result.push(...findSmallestHighEnough(child, needed));
    }
  }

  return cwd.size >= needed ? [...result, cwd.size] : result;
}

const root = new DirNode('/');

const lines = fs
  .readFileSync('input', 'utf8')
  .split('\n')
  .map((line) => line.trim());

let cwd: DirNode | null = null;

lines.forEach((line) => {
  if (line.match(/\$ cd \//)) {
    cwd = root;
    return;
  }

  if (line.match(/\$ cd \.\./)) {
    cwd = cwd && cwd.parent ? cwd.parent : cwd;
    return;
  }

  if (line.match(/\$ cd (.*)/)) {
    const match = line.match(/\$ cd (.*)/);
    if (match && cwd) {
      for (const child of cwd.children) {
        if (child.name == match[1] && child instanceof DirNode) {
          cwd = child;
          break;
        }
      }
    }
    return;
  }

  if (line.match(/\$ ls/)) {
    return;
  }

  if (line.match(/(\d*|dir) (\w*)/)) {
    const match = line.match(/(\d*|dir) (\w*)/);

    if (match && cwd) {
      if (match[1] == 'dir') {
        cwd.children.push(new DirNode(match[2], cwd));
      } else {
        const child = new FileNode(match[2], Number(match[1]));
        cwd.children.push(child);
        let parent: DirNode | null = cwd;
        while (parent != null) {
          parent.size = parent.children
            .map((child) => child.size)
            .reduce((prev, curr) => prev + curr);
          parent = parent.parent;
        }
      }
    }
  }
});

const smallestHighEnough = Math.min(
  ...findSmallestHighEnough(root, 30000000 - (70000000 - root.size))
);

console.log(smallestHighEnough);
