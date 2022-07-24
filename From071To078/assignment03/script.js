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


let myArray = ["E", "l", "z", ["e", "r"], "o"];
let flatArr = myArray.reduce(function(acc,current){
    if(Array.isArray(current)){
        let a = "";
        for (let i = 0; i < current.length; i++) {
            a+=current[i];
        }
        return acc+a;

    }else{
        return acc.concat(current);
    }
})
console.log(flatArr);