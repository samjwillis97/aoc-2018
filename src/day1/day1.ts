export function part1(input: string[]) {
  let initialFrequency = 0
  input
    .filter((change) => change)
    .forEach((change) => {
    const operator = change[0]
    const value = parseInt(change.substring(1))
    operator === '+' ? initialFrequency += value : initialFrequency -= value
  })
  return initialFrequency
}

export function part2(input: string[]) {
  let seenFrequencies = new Set<number>()
  let frequency = 0

  while (true) {
    for (let change of input) {
      if (!change) continue
      const operator = change[0]
      const value = parseInt(change.substring(1))
      operator === '+' ? frequency += value : frequency -= value
      
      if (seenFrequencies.has(frequency)) {
        return frequency
      } 

      seenFrequencies.add(frequency)
    }
  }
}
