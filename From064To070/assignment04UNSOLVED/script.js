function specialMix(...data) {
  let sum=0,count=0;
  for(i=0;i<data.length;i++){
    data[i] = data[i].match(/(\d+)/);
    if (data[i]!=null){
      sum = +sum + +data[i][0];
      count++;
    }
  }
  if (count==0){
    return 'All Is String'
  }
  else {
    return sum
  }
}
// function specialMix(...data) {
//   let sum = 0;
//   for(i=0;i<data.length;i++){
//     if(parseInt(data[i]) !== NaN){
//       sum += parseInt(data[i]);
//     }
//     else{
//       data[i]=0;
//     }
//   }
//   return sum;
// }

// console.log(parseInt('he'));
// chech =()=>{
//   if(parseInt('he') == NaN){
//     return 'yes';
//   }
//   else 
//   return 'no'
// }
// console.log(chech());


//  console.log(specialMix(10, 20, 30)); // 60
 console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
