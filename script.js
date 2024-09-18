let n = 5
for(let i = 1; i<=n; i++){
    let space = ' '.repeat(n-i);
    if(n === 1){
        console.log(space + "*")
    }
    else{
        let hallowSpace = ' '.repeat(2 * i - 3 )
        console.log(hallowSpace);
    }
}


