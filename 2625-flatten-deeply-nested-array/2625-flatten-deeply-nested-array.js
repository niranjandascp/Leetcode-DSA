/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
       if (n === 0) return arr;

    let result = [];
    let stack = [{ array: arr, depth: 0, index: 0 }];

    while (stack.length > 0) {
        let { array, depth, index } = stack.pop();

        while (index < array.length) {
            let item = array[index];
            index++;

            if (Array.isArray(item) && depth < n) {
                stack.push({ array, depth, index });

                stack.push({ array: item, depth: depth + 1, index: 0 });
                break;
            } else {
                result.push(item);
            }
        }
    }

    return result;
};