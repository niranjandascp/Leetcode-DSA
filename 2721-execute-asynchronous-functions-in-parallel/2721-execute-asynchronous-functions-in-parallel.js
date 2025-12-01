/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let completed = 0;

        for (let i = 0; i < functions.length; i++) {
            try {
                const promise = functions[i]();
                promise.then(value => {
                    results[i] = value;
                    completed++;

                    if (completed === functions.length) {
                        resolve(results);
                    }
                }).catch(err => {
                    reject(err);
                });

            } catch (err) {
                reject(err);
            }
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */