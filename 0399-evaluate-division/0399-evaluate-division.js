/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let graph = new Map();

    for (let i = 0; i < equations.length; i++) {
        let [a, b] = equations[i];
        let val = values[i];

        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);

        graph.get(a).push([b, val]);
        graph.get(b).push([a, 1 / val]);
    }

    function dfs(src, target, visited) {
        if (!graph.has(src)) return -1;
        if (src === target) return 1;

        visited.add(src);

        for (let [neighbor, weight] of graph.get(src)) {
            if (!visited.has(neighbor)) {
                let result = dfs(neighbor, target, visited);
                if (result !== -1) {
                    return result * weight;
                }
            }
        }

        return -1;
    }

    let res = [];

    for (let [c, d] of queries) {
        if (!graph.has(c) || !graph.has(d)) {
            res.push(-1);
        } else {
            res.push(dfs(c, d, new Set()));
        }
    }

    return res;
};