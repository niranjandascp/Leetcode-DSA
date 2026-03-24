var SmallestInfiniteSet = function() {
    this.current = 1;
    this.heap = [];
    this.set = new Set();
};

SmallestInfiniteSet.prototype.swap = function(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
};

SmallestInfiniteSet.prototype.heapifyUp = function() {
    let i = this.heap.length - 1;
    while (i > 0) {
        let parent = Math.floor((i - 1) / 2);
        if (this.heap[parent] <= this.heap[i]) break;
        this.swap(parent, i);
        i = parent;
    }
};

SmallestInfiniteSet.prototype.heapifyDown = function() {
    let i = 0;
    while (true) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let smallest = i;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest === i) break;
        this.swap(i, smallest);
        i = smallest;
    }
};

SmallestInfiniteSet.prototype.popSmallest = function() {
    if (this.heap.length > 0) {
        const smallest = this.heap[0];

        if (this.heap.length === 1) {
            this.heap.pop();
        } else {
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
        }

        this.set.delete(smallest);
        return smallest;
    }

    return this.current++;
};

SmallestInfiniteSet.prototype.addBack = function(num) {
    if (num < this.current && !this.set.has(num)) {
        this.heap.push(num);
        this.set.add(num);
        this.heapifyUp();
    }
};