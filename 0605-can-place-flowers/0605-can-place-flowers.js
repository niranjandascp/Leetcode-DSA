/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const emptyLeft = (i === 0) || (flowerbed[i - 1] === 0);
            const emptyRight = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0);

            if (emptyLeft && emptyRight) {
                flowerbed[i] = 1;  // plant a flower
                n--;               // reduce required flowers
            }
        }

        if (n <= 0) return true;  
    }

    return false;
};