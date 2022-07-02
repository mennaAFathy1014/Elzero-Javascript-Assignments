let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
2
3
4
for(i=start;i<mix.length;i++){
    if(mix[i]%mix[0]==0 && mix[i]!=mix[0]){
        console.log(mix[i])
    }
}