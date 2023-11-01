import { readFileSync } from "fs";

export function readInputFile(day: number) {
  const result = readFileSync(`./src/day${day}/input.txt`).toString();
  return result ? result.split('\n') : []
}
