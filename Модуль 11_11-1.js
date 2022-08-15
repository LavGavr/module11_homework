function countDifferentElements (arr){
    let countOdd = 0;
    let countEven = 0;
    let countZerr = 0;
    let countNull = 0;
    let countStr = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr [i] === 'string') {
        countStr = countStr + 1;
      }
      else if (arr [i] === 0) {
        countZerr = countZerr + 1;
      }
      else if (arr [i] === null) {
        countNull = countNull + 1;
      }
      else if (arr [i] %2 === 0) {
        countEven = countEven + 1;
      } else {
        countOdd = countOdd + 1;
      }
    }
    console.log ("количество null - " + countNull);
    console.log ("количество нечетных чисел - " + countOdd);
    console.log ("количество четных чисел - " + countEven);
    console.log ("количество 0 - " + countZerr);
    console.log ("количество строк - " + countStr);
    }
    let arr = [2, 3, 5, 8, 0, 7, null, "java"];
    let arr2 = [ 0, 7, null, "java"];
    let arr3 = [2, 3, 5];
    countDifferentElements(arr);
    countDifferentElements(arr2);
    countDifferentElements(arr3);
    