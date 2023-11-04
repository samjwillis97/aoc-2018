import { readInputFile } from "../utils"
import { part1, part2 } from "./day3"

test('Day 3 Part 1 Demo', () => {
  const result = part1([
    '#1 @ 1,3: 4x4',
    '#2 @ 3,1: 4x4',
    '#3 @ 5,5: 2x2'
  ])
  expect(result).toBe(4)
})

test('Day 3 Part 1 Real', () => {
  const input = readInputFile(3)
  const result = part1(input)
  expect(result).toBe(97218)
})

test('Day 3 Part 2 Demo', () => {
  const result = part2([
    '#1 @ 1,3: 4x4',
    '#2 @ 3,1: 4x4',
    '#3 @ 5,5: 2x2'
  ])
  expect(result).toBe(3)
})

test('Day 3 Part 2 Real', () => {
  const input = readInputFile(3)
  const result = part2(input)
  expect(result).toBe(3)
})

