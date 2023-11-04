type Rug = {
  id: number;
  startX: number;
  startY: number;
  width: number;
  height: number;
}

export function part1(input: string[]) {
  const rugs = input
    .filter((line) => line)
    .map((line) => parseLine(line))

  const x = rugs.reduce((a, v) => v.startX + v.width > a ? v.startX + v.width : a, 0) + 1
  const y = rugs.reduce((a, v) => v.startY + v.height > a ? v.startY + v.height : a, 0) + 1

  return rugs
    .reduce((a, v) => a = addRug(a, v), initEmptySpace(x, y))
    .reduce((a, v) => {
      const row = v.reduce((a, v) => v > 1 ? a += 1 : a, 0)
      if (row > 1) a += row
      return a
    }, 0)
}

function overlapping(rug1: Rug, rug2: Rug) {

  return false
}

export function part2(input: string[]) {
  const xMap = new Map<number, number>()
  const yMap = new Map<number, number>()

  const rugs = input
    .filter((line) => line)
    .map((line) => parseLine(line))

  // Create a map of all the covered X and Y with value being how many times its been covered
  // Then check if all rugs values are 1 and that means no overlap

  return rugs
    .find((rug) => {
      const overlapping = rugs.filter((other) => {
        if (rug.id === other.id) return false

        // if (rug.id === 4 && other.id === 580) {
        //   console.log(rug)
        //   console.log(other)
        //   console.log(`Rug ${rug.id} x: ${rug.startX}->${rug.startX + rug.width - 1}`)
        //   console.log(`Rug ${other.id} x: ${other.startX}->${other.startX + other.width - 1}`)
        //   console.log(`Rug ${rug.id} y: ${rug.startY}->${rug.startY + rug.height - 1}`)
        //   console.log(`Rug ${other.id} y: ${other.startY}->${other.startY + other.height - 1}`)
        // }

        if 
          (
            other.startX >= rug.startX && other.startX <= rug.startX + rug.width - 1 || // seems right?
            (
              other.startX + other.width > rug.startX && 
             other.startX + other.width <= rug.startX + rug.width - 1
            )
          ) {

            if (
                other.startY >= rug.startY && other.startY <= rug.startY + rug.height - 1||
                (
                  other.startY + other.height > rug.startY && 
                 other.startY + other.height <= rug.startY + rug.height - 1
                ) 
              )
             return true
          } 

        return false
      })
      return overlapping.length === 0 
    })
    ?.id
}

function initEmptySpace(x: number, y: number) {
  const space = []
  const across = []
  for (let j = 0; j < y; j++) {
    across.push(0)
  }
  for (let i = 0; i < x; i++) {
    space.push(JSON.parse(JSON.stringify(across)) as number[])
  }
  return space
}

function parseLine(line: string) {
  const splitLine = line.split(' ')
  return {
    id: parseInt(splitLine[0].slice(1)),
    startX: parseInt(splitLine[2].split(',')[0]),
    startY: parseInt(splitLine[2].split(',')[1].slice(0, -1)),
    width: parseInt(splitLine[3].split('x')[0]),
    height: parseInt(splitLine[3].split('x')[1]),
  }
}

function addRug(counts: number[][], rug: Rug) {
  for (let i = rug.startX; i < rug.width + rug.startX; i++) {
    for (let j = rug.startY; j < rug.height + rug.startY; j++) {
      // console.log(`Rug ${rug.id}, x: ${j}, y: ${i}`)
      counts[i][j] += 1
    }
  }
  return counts
}

