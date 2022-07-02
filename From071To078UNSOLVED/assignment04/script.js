// let nums=[10,20,15,30];
// let add = nums.reduce(function(acc,current,index,arr){
//     console.log(`acc => ${acc}`);
//     console.log(`current => ${current}`);
//     console.log(`index => ${index}`);
//     console.log(`arr => ${arr}`);
//     console.log(`${acc + current}`);
//     console.log("###################")
//     return acc+current;
//     // لو معلمتش الريترن الاكيموليتور هيبقى غير معرف 
//     // 
// });
// console.log(add)
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let num = numsAndStrings.reduce(function(acc,current,index,arr){
        console.log(`acc => ${+acc}`);
        console.log(`current => ${+current}`);
        console.log(`index => ${index}`);
        console.log(`arr => ${arr}`);
        console.log(`${+acc + +current}`);
        console.log("###################")
        return acc+current;

    });
console.log(num)