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
  let result = ''
  input.some((id1) => {
    input.some((id2) => {
      let mismatchCount = 0
      let mismatchIndex = 0
      id1.split('').some((char, index) => {
        if (char !== id2[index]) {
          mismatchCount += 1
          mismatchIndex = index
        }
        if (mismatchCount > 1) return true
      })
      if (mismatchCount === 1) {
        result = id2.slice(0, mismatchIndex) + id2.slice(mismatchIndex + 1, id2.length)
        return true
      }
    })
    if (result) return true
  })

return result
}
    // So this just creates an array of 0 -> stringLength lol
    // [...Array(stringLength).keys()]
