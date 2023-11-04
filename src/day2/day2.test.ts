import { readInputFile } from "../utils"
import { part1, part2 } from "./day2"

test('Day 2 Part 1 Demo', () => {
  const result = part1([
    'abcdef',
    'bababc',
    'abbcde',
    'abcccd',
    'aabcdd',
    'abcdee',
    'ababab'
  ])
  expect(result).toBe(12)
})

test('Day 2 Part 1 Real', () => {
  const input = readInputFile(2)
  const result = part1(input)
  expect(result).toBe(4920)
})

test('Day 2 Part 2 Demo', () => {
  const result = part2([
    'abcde',
    'fghij',
    'klmno',
    'pqrst',
    'fguij',
    'axcye',
    'wvxyz'
  ])
  expect(result).toBe('fgij')
})

test('Day 2 Part 2 Real', () => {
  const input = readInputFile(2)
  const result = part2(input)
})
