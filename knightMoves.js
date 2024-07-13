// Define a class to represent nodes in our BFS traversal
class Node {
  constructor(position, path) {
    this.position = position // Current position on the board
    this.path = path // Path taken to reach this position
  }
}

function knightMoves(start, end) {
  // Define all 8 possible moves of a knight
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ]

  function isWithinBoard(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8
  }

  // Initialize a queue with the starting position and path
  const queue = [new Node(start, [start])]
  const visited = Array.from({ length: 8 }, () => Array(8).fill(false))
  // Mark the starting position as visited
  visited[start[0]][start[1]] = true

  // Perform Breadth-First Search (BFS)
  while (queue.length > 0) {
    // Dequeue the current node
    const currentNode = queue.shift()
    const [x, y] = currentNode.position

    // If we reached the target position, print the path and return it
    if (x === end[0] && y === end[1]) {
      console.log(
        `You made it in ${currentNode.path.length - 1} moves! Here's your path:`
      )
      return currentNode.path
    }

    // Explore all 8 possible moves of the knight
    for (const [dx, dy] of directions) {
      const newX = x + dx
      const newY = y + dy
      const newPosition = [newX, newY]

      if (isWithinBoard(newX, newY) && !visited[newX][newY]) {
        visited[newX][newY] = true
        queue.push(new Node(newPosition, [...currentNode.path, newPosition]))
      }
    }
  }

  return null
}

console.log(knightMoves([0, 0], [1, 2]))
console.log(knightMoves([0, 0], [3, 3]))
console.log(knightMoves([3, 3], [0, 0]))
console.log(knightMoves([0, 0], [7, 7]))
console.log(knightMoves([3, 3], [4, 3]))
