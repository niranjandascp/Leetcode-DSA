var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    
    const m = potions.length;
    const result = [];

    for (let spell of spells) {
        let left = 0;
        let right = m - 1;
        let idx = m; // default: no valid potion

        const target = Math.ceil(success / spell);

        // Binary search
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (potions[mid] >= target) {
                idx = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        result.push(m - idx);
    }

    return result;
};