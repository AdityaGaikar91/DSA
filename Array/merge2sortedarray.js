const nums1 = [3, 5, 7, 9];
const nums2 = [1, 2, 6, 8, 10, 15, 20];

function mergeSortedArrays(nums1, nums2) {
    let mergedArray = [];
    let i = 0
    let j = 0;
    while(i < nums1.length && j < nums2.length){
        if(nums1[i]< nums2[j]){
            mergedArray.push(nums1[i]);
            i++;
        }
        else{
            mergedArray.push(nums2[j]);
            j++;
        }
    }
    while(i < nums1.length){
        mergedArray.push(nums1[i]);
        i++;
    }
    while(j < nums2.length){
        mergedArray.push(nums2[j]);
        j++;
    }


    return mergedArray;
}


console.log(mergeSortedArrays(nums1, nums2));