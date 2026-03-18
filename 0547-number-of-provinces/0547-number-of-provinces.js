/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
        const n = isConnected.length;
    const visited = new Array(n).fill(false);

    function dfs(city) {
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
                visited[neighbor] = true;
                dfs(neighbor);
            }
        }
    }

    let provinces = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            provinces++;       // new province found
            visited[i] = true;
            dfs(i);
        }
    }

    return provinces;
};