//selection sort o(n^2)
//find minimum element and put it in front.

let selectionArray = function(arr){
    let length = arr.length;

    for (let i = 0;i < length;i++){
        let minimumIndex = i;

        for(let j = minimumIndex+1 ;j < length;j++){
            if(arr[minimumIndex] > arr[j]){
                minimumIndex = j
            }
        }

        if(minimumIndex != i){
            let temp = arr[i];
            arr[i] = arr[minimumIndex];
            arr[minimumIndex] = temp;
        }
    }
    return arr;
}

let arr = [64 ,25, 12, 22, 11]
console.log(selectionArray(arr));

//Bubble sort O(n^2)

let bubbleSort = function(inputArr){
    let length = inputArr.length;

   
    for(let i = 0; i<length;i++){
        let minimumIndex = i;
        let isSwaped = false;

        for(let j = i+1;j<length;j++){
            if(inputArr[j] < inputArr[minimumIndex]){
                //swap
                let temp = inputArr[minimumIndex];
                inputArr[minimumIndex] = inputArr[j];
                inputArr[j] = temp;
                isSwaped = true;
            }
        }
        if (isSwaped == false){
            break;
        }
    }
    return inputArr;
}

console.log(bubbleSort(arr));

//recursive bubble sort

function recursiveBubbleSort(inputArr, arrayLength){
    let isSwaped = false;
    if (arrayLength == 1){
        return ;
    }

    for (let i = 0; i<arrayLength-1;i++){
        if(inputArr[i] > inputArr[i+1]){
            let temp = inputArr[i];
            inputArr[i] = inputArr[i+1];
            inputArr[i+1] = temp;
            isSwaped = true
        }
    }
    if (isSwaped == true){ 
        recursiveBubbleSort(inputArr,arrayLength-1);
    }
}

let arr1 = [64 ,25, 12, 22, 11];
console.log(recursiveBubbleSort(arr1,arr1.length));

//insertion Sort
function insertionSort(inputArr){
    for (let i = 1; i< inputArr.length; i++){
        let keyElement = inputArr[i];
        let j = i-1;

        while(j>=0 && keyElement < inputArr[j]){
            arr[i] = arr[j];
            j = j-1;
        }
        inputArr[j+1] = keyElement;
    }
    return inputArr;

}

console.log(insertionSort(arr1));

//recurssive insertion sort
function recursiveInsertionSort(inputArray,length){
    if (length <= 1){
        return ;
    }

    // Sort first n-1 elements
    insertionSortRecursive( arr, n-1 );
        
    // Insert last element at its
    // correct position in sorted array.
    let last = arr[n-1];
    let j = n-2;

    while (j >= 0 && arr[j] > last)
    {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = last;
}
    
//merge sort
//Algo
// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:  
//              middle m = l+ (r-l)/2
//      2. Call mergeSort for first half:   
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call merge(arr, l, m, r)


function mergeSort(inputArr,leftIndex,rightIndex){
    if(leftIndex == rightIndex){
        return;
    }

    let middle = leftIndex+ parseInt((rightIndex-leftIndex)/2);

    mergeSort(inputArr,leftIndex,middle);
    mergeSort(inputArr,middle,rightIndex);

}