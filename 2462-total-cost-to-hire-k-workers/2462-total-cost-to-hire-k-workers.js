/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, c) {
    let n = costs.length, l = 0, r = n - 1, res = 0
    let h1 = [], h2 = []
    function push(h, x) {
        h.push(x)
        let i = h.length - 1
        while (i > 0) {
            let p = (i - 1) >> 1
            if (h[p][0] <= h[i][0]) break
                ;[h[p], h[i]] = [h[i], h[p]]
            i = p
        }
    }
    function pop(h) {
        let r = h[0]
        let x = h.pop()
        if (h.length) {
            h[0] = x
            let i = 0
            while (true) {
                let l = i * 2 + 1, r2 = l + 1, m = i
                if (l < h.length && h[l][0] < h[m][0]) m = l
                if (r2 < h.length && h[r2][0] < h[m][0]) m = r2
                if (m === i) break
                    ;[h[i], h[m]] = [h[m], h[i]]
                i = m
            }
        }
        return r
    }
    while (l <= r && h1.length < c) push(h1, [costs[l++], l - 1])
    while (l <= r && h2.length < c) push(h2, [costs[r--], r + 1])
    while (k--) {
        let a = h1.length ? h1[0] : [Infinity, Infinity]
        let b = h2.length ? h2[0] : [Infinity, Infinity]
        if (a[0] <= b[0]) {
            res += pop(h1)[0]
            if (l <= r) push(h1, [costs[l++], l - 1])
        } else {
            res += pop(h2)[0]
            if (l <= r) push(h2, [costs[r--], r + 1])
        }
    }
    return res
}