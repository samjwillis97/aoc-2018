import { readInputFile } from "../utils"
import { part1, part2 } from "./day1"

test('Day 1 Part 1 Demo', () => {
  const result = part1(['+1', '-2', '+3', '+1'])
  expect(result).toBe(3)
})

test('Day 1 Part 2 Demo', () => {
  const result = part2(['+1', '-2', '+3', '+1'])
  expect(result).toBe(2)
})

test('Day 1 Part 1 Real', () => {
  const input = readInputFile(1)
  const result = part1(input)
  expect(result).toBe(416)
})

test('Day 1 Part 2 Real', () => {
  const input = readInputFile(1)
  const result = part2(input)
  expect(result).toBe(56752)
})
