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
console.log(`given number 121 ${isPalindrome(121) === true ? 'its a plaindrome' : 'its not a plaindrome'}`)