export function part1(input: string[]) {
  let twos = 0
  let threes = 0

  input.forEach((id) => {
    const counts: { [key: string]: number } = {}
    id.split('').forEach((char) => {
      if (counts[char]) {
        counts[char] += 1
      } else {
        counts[char] = 1
      }
    })

    if (Object.values(counts).some(v => v === 2)) twos += 1
    if (Object.values(counts).some(v => v === 3)) threes += 1
  })

  return twos * threes
}

export function part2(input: string[]) {
  const stringLength = input[0].length
  input.forEach((id) => {

  })
}
    // So this just creates an array of 0 -> stringLength lol
    // [...Array(stringLength).keys()]
