class EventEmitter {    constructor() {
        this.events = {};
        this.subscriptions = []; 
    }
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
     if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        const subscriber = { callback, active: true };
        this.events[eventName].push(subscriber);

        const id = this.subscriptions.length;
        this.subscriptions.push({ eventName, subscriber });

        return {
            unsubscribe: () => {
                subscriber.active = false; 
                return undefined;
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.events[eventName]) return [];

        const results = [];

        for (const sub of this.events[eventName]) {
            if (sub.active) {
                results.push(sub.callback(...args));
            }
        }

        return results;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */