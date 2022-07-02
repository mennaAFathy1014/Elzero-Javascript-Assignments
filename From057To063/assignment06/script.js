function multiply(...numbers){
    let result=1;
    let num=[];
    // console.log(numbers)
    for(i=0;i<numbers.length;i++){
        if(typeof numbers[i] == "number"){
            num = num.concat(numbers[i]);
        }
    }
    for(i=0;i<num.length;i++){
        num[i] = Math.floor(num[i])
        result = result*num[i]
    }
    console.log(result)
   
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000