/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;
    let romanNumeral = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }

    for ( let i = 0; i < s.length-1; i++){
        if (romanNumeral[s[i]] < romanNumeral[s[i+1]]){
            total -= romanNumeral[s[i]];
            } 
            
            else {
           total += romanNumeral[s[i]];
        }
      
    }

    return total += romanNumeral[s[s.length-1]];
};
