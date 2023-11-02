import { copyFile, copyFileSync, existsSync, mkdirSync, openSync } from "fs";

if (!process.argv[2]) {
  console.log("No argument given.");
  process.exit(1);
}

const day = parseInt(process.argv[2]);
console.log(`Creating directories for Day ${day}`);

const workingDir = process.cwd();
const dayDirectory = `${workingDir}/src/day${day}`;
console.log(`Creating ${dayDirectory}`);

if (existsSync(dayDirectory)) {
  console.log("Directory already exists");
  process.exit(1);
}

mkdirSync(dayDirectory);
openSync(`${dayDirectory}/day${day}.ts`, 'a')
openSync(`${dayDirectory}/day${day}.test.ts`, 'a')
openSync(`${dayDirectory}/input.txt`, 'a')

copyFileSync('src/template/day.ts', `${dayDirectory}/day${day}.ts`)

