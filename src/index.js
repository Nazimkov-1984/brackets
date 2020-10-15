  
module.exports = function check(str, bracketsConfig) {
    let map = new Map();
    for (const argument of bracketsConfig) {
        map.set(argument[1], argument[0]);
    }

    let stack = [];
    for (const char of str) {
        if (map.has(char)) {
            if (char === map.get(char)) {
                if (stack[stack.length - 1] === char) {
                    stack.pop();
                } else {
                    stack.push(char);
                }
            } else {
                if (stack.pop() !== map.get(char)) {
                    return false
                }
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};