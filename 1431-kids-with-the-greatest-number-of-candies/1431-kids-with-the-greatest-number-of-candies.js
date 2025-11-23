/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
     const max = Math.max(...candies);
    const result = [];

    for (let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= max);
    }

    return result;
};