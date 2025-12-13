/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
     let countStack = [];
    let stringStack = [];
    let currStr = "";
    let num = 0;

    for (let ch of s) {
        if (!isNaN(ch)) {
            
            num = num * 10 + Number(ch);
        } 
        else if (ch === "[") {
            countStack.push(num);
            stringStack.push(currStr);
            num = 0;
            currStr = "";
        } 
        else if (ch === "]") {
            let repeat = countStack.pop();
            let prevStr = stringStack.pop();
            currStr = prevStr + currStr.repeat(repeat);
        } 
        else {
            currStr += ch;
        }
    }

    return currStr;
};