/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = [];

    const swap = (i, j) => [heap[i], heap[j]] = [heap[j], heap[i]];

    const heapifyUp = () => {
        let i = heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (heap[parent] <= heap[i]) break;
            swap(parent, i);
            i = parent;
        }
    };

    const heapifyDown = () => {
        let i = 0;
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (left < heap.length && heap[left] < heap[smallest]) {
                smallest = left;
            }
            if (right < heap.length && heap[right] < heap[smallest]) {
                smallest = right;
            }

            if (smallest === i) break;
            swap(i, smallest);
            i = smallest;
        }
    };

    for (let num of nums) {
        heap.push(num);
        heapifyUp();

        if (heap.length > k) {
            heap[0] = heap.pop();
            heapifyDown();
        }
    }

    return heap[0];
};