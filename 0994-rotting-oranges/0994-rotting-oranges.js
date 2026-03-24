/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const queue = [];
    let fresh = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                fresh++;
            }
        }
    }

    if (fresh === 0) return 0;

    let minutes = 0;
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];

    while (queue.length > 0) {
        let size = queue.length;
        let infected = false;

        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift();

            for (let [dr, dc] of directions) {
                const r = row + dr;
                const c = col + dc;

                if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] === 1) {
                    grid[r][c] = 2;  
                    queue.push([r, c]);
                    fresh--;
                    infected = true;
                }
            }
        }

        if (infected) minutes++;
    }

    return fresh === 0 ? minutes : -1;
};