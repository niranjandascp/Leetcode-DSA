/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
        const graph = Array.from({ length: n }, () => []);

    // Build graph
    for (let [a, b] of connections) {
        graph[a].push([b, 1]); // original direction (wrong if going away from 0)
        graph[b].push([a, 0]); // reverse direction (correct)
    }

    let visited = new Array(n).fill(false);

    function dfs(city) {
        visited[city] = true;
        let changes = 0;

        for (let [neighbor, cost] of graph[city]) {
            if (!visited[neighbor]) {
                changes += cost + dfs(neighbor);
            }
        }

        return changes;
    }

    return dfs(0);
};