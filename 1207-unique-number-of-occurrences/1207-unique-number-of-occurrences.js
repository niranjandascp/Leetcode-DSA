/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
     const freq = new Map();

    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const occurrences = [...freq.values()];

    const unique = new Set(occurrences);

    return occurrences.length === unique.size;
};