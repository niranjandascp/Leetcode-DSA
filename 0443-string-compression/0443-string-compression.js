/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
        let write = 0;
    let i = 0;
    const n = chars.length;

    while (i < n) {
        let char = chars[i];
        let count = 0;

        while (i < n && chars[i] === char) {
            i++;
            count++;
        }

        chars[write++] = char;

        if (count > 1) {
            for (let c of String(count)) {
                chars[write++] = c;
            }
        }
    }

    return write;
};