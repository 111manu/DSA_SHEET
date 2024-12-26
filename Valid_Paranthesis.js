/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        
        // If opening bracket, push onto the stack
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            // If closing bracket
            if (stack.length > 0) {
                const top = stack[stack.length - 1];
                if ((ch === ')' && top === '(') || 
                    (ch === '}' && top === '{') || 
                    (ch === ']' && top === '[')) {
                    stack.pop();
                } else {
                    // Mismatched closing bracket
                    return false;
                }
            } else {
                // Unmatched closing bracket
                return false;
            }
        }
    }
    
    // If the stack is empty, all brackets are matched
    return stack.length === 0;
};
