/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    const memoized = function (...args) {
        const key = JSON.stringify(args);   // unique key for each argument list

        if (cache.has(key)) {
            return cache.get(key);          // return cached result
        }

        // compute and store in cache
        const result = fn(...args);
        cache.set(key, result);
        callCount++;
        return result;
    };

    memoized.getCallCount = () => callCount;

    return memoized;
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */