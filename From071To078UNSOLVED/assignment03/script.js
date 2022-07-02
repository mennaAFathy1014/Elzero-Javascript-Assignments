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
let flatened = myArray.reduce(function(acc,current){
    if(typeof current == "object"){
        current = current.slice().join('');
        // current.split().join();
        return  acc.concat(current); 
    }
    return acc + current;
});
console.log(flatened);