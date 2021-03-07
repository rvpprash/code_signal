/// space complexity O(n)
function firstDuplicate(a) {
    let isSeen = [];
 for (num of a) {
     if (isSeen[num] ) {
      return num;
     } else {
         isSeen[num] = true;
     }
     console.log(num);
 }
 return -1;
}

/// alternate solution - space efficient
function firstDuplicate(a) {
    for (num of a) {
        let arrPos = Math.abs(num)-1;
        if (a[arrPos] < 0) {
            return Math.abs(num);
        } else {
            a[arrPos] = -a[arrPos];
        }
    }
    return -1;
}
