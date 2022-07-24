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


let nums = [2, 12, 11, 5, 10, 1, 99];

// 500
let add = nums.reduce(function(acc, current) {
    if(current%2 == 0){
        return acc*current;
    }
    else {
        return acc+current;
    }
},1)
console.log(add);
