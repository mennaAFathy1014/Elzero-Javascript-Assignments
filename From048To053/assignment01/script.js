let start = 10;
let end = 100;
let exclude = 40;

//// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
for ( start = 10 ; start<=100 ; start += 10){
    if(start!=exclude){
        console.log(start)
    }
}