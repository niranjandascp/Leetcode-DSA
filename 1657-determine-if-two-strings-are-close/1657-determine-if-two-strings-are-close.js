/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
     if (word1.length !== word2.length) return false;

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);

    for (let ch of word1) count1[ch.charCodeAt() - 97]++;
    for (let ch of word2) count2[ch.charCodeAt() - 97]++;

  
    for (let i = 0; i < 26; i++) {
        if ((count1[i] === 0) !== (count2[i] === 0)) return false;
    }

    
    const freq1 = count1.filter(x => x > 0).sort((a,b)=>a-b);
    const freq2 = count2.filter(x => x > 0).sort((a,b)=>a-b);

    for (let i = 0; i < freq1.length; i++) {
        if (freq1[i] !== freq2[i]) return false;
    }

    return true;
};