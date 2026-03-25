/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let n = nums1.length;

    let pairs = [];
    for (let i = 0; i < n; i++) {
        pairs.push([nums1[i], nums2[i]]);
    }

    pairs.sort((a, b) => b[1] - a[1]);

    let heap = new MinHeap();
    let sum = 0;
    let result = 0;

    for (let [n1, n2] of pairs) {
        heap.push(n1);
        sum += n1;

        if (heap.size() > k) {
            sum -= heap.pop();
        }

        if (heap.size() === k) {
            result = Math.max(result, sum * n2);
        }
    }

    return result;
};