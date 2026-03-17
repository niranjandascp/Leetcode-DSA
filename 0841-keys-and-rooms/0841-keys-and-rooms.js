/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = new Set();

    function dfs(room) {
        if (visited.has(room)) return;
        
        visited.add(room);

        for (let key of rooms[room]) {
            dfs(key);
        }
    }

    dfs(0);

    return visited.size === rooms.length;
};