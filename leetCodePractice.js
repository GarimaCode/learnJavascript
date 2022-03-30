//Two sum
var twoSum = function(nums, target) {
    let ansArray = [];

    for (let i = 0;i < nums.length; i++){
        for(let j = i+1;j < nums.length; j++){
            if (nums [i]+nums[j] === target){
                ansArray.push(i,j);
            }
        }
    }
    return ansArray;
};
console.log(twoSum([3,2,4],7));

var optimizeTwoSUm = function(nums, target){
    let ansArray = [];
    let sumChecker = {};
    nums.forEach((item,index)=> {
        if (sumChecker.hasOwnProperty(target - item)){
            ansArray.push(index,sumChecker[target - item])
        }
        else{
            sumChecker[item] = index; 
        }
    })
    return ansArray;
}

console.log(optimizeTwoSUm([3,2,4],7));

//palingdrome
// var isPalindrome = function(x) {

//     if(x < 0 || (x % 10 == 0 && x != 0)) {
//         return false;
//     }

//     let stringNumber = new String(x).valueOf();

//     for (let i = 0 ; i<stringNumber.length/2 ;i++){
//         if (stringNumber[i] != stringNumber[(stringNumber.length-1) - i]){
//             return false;
//         };
//     }
//     return true;
// }

//better solution
var isPalindrome = function(x){
    if(x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    
    
    // let reverseString = x.toString().split('').reverse().join('');
    // return x == reverseString ;

    let rem;
    let sum =0;
    let temp = x;
    while (temp > 0){
        rem = Math.floor(temp % 10);
        temp = Math.floor(temp/10);
        sum = Math.floor(sum * 10 + rem);
    }
    return x === sum;
}
console.log(`given number 121 ${isPalindrome(121) === true ? 'its a plaindrome' : 'its not a plaindrome'}`);

//Roman to integer


var romanToInt = function(s) {
    let intAns = 0;
    let integerMap ={   'I':1,
                        'V':5,
                        'X':10,
                        'L':50,
                        'C' :100,
                        'D' :500,
                        'M' :1000
                    }

    for (let i = 0 ;i < s.length ;i++){
        if((s[i] == "I" && (s[i+1] == "V" || s[i+1] == "X"))|| 
        (s[i] == "X" && (s[i+1] == "L" || s[i+1] == "C"))|| 
        (s[i] == "C" && (s[i+1] == "D" || s[i+1] == "M")))
        {
            intAns = intAns + integerMap[s[i+1]] - integerMap[s[i]];
            i = i+1;
        }
        else
        {   
            intAns = intAns+integerMap[s[i]];
        }
    }
    return intAns;
};

console.log(`converting MCMXCIVI to integer value ${romanToInt('MCMXCIV')}`)

// Longest Common Prefix

var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for (let i = 0 ; i < strs.length ; i++){
        for (let j = 0 ; j < strs[0].length ; j++){
            if (strs[i][j] !== prefix[j]){
                prefix = prefix.substring(0,j)
            }
        }
    }
    return prefix;
};

let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs))

//valid parentheses
var isValid = function(s) {
    let parenthesesMap = new Map([
        [')', '('], 
        ['}','{'], 
        [']' , '[']
    ])
    let elements = [];

    for(let i = 0 ; i < s.length; i++){
        const value = s.charAt(i);
        if (['[','(','{'].includes(value)) {
            elements.push(value);
        }
        else {
            if (elements[elements.length - 1] !== parenthesesMap.get(value)) {
                return false;
            }
            elements.pop();
        }
    }
    return elements.length === 0;
};

let inputString = '{[]}';
console.log(`${inputString} ${isValid(inputString) ? 'is valid string' : 'is not a valid string'}`);

//merge sorted list
var mergeTwoLists = function(list1, list2) {
    let newArray = list1.concat(list2);
    newArray.sort();
    return newArray;
};

let list1 = [1,2,3,4];
let list2 = [2,3,4,7];
console.log(mergeTwoLists(list1,list2));
