
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
        let temp = target - item;
        if (sumChecker.hasOwnProperty(temp)){
            ansArray.push(index,sumChecker[temp])
        }
        else{
            sumChecker[item] = index; 
            console.log(sumChecker);
        }
    })
    return ansArray;
}

console.log(optimizeTwoSUm([3,2,4],7));