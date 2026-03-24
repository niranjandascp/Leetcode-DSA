/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze.length;
    const n = maze[0].length;

    const queue = [];
    queue.push([entrance[0], entrance[1], 0]);

    maze[entrance[0]][entrance[1]] = '+';

    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1]
    ];

    while (queue.length > 0) {
        const [row, col, steps] = queue.shift();

        for (let [dr, dc] of directions) {
            const r = row + dr;
            const c = col + dc;

            if (r >= 0 && r < m && c >= 0 && c < n && maze[r][c] === '.') {

                if (r === 0 || r === m - 1 || c === 0 || c === n - 1) {
                    return steps + 1;
                }

                maze[r][c] = '+';

                queue.push([r, c, steps + 1]);
            }
        }
    }

    return -1;
};