var combinationSum3 = function(k, n) {
    const result = [];

    function backtrack(start, k, target, current) {
        if (k === 0 && target === 0) {
            result.push([...current]);
            return;
        }


        if (k === 0 || target < 0) return;

        for (let i = start; i <= 9; i++) {
            if (i > target) break;

            current.push(i);
            backtrack(i + 1, k - 1, target - i, current);
            current.pop();
        }
    }

    backtrack(1, k, n, []);
    return result;
};