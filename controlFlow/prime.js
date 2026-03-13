function primeNumber(limit){
    for(let i=2;i<=limit;i++){
        let isPrime=true;
        for(let j=2;j<i;j++){
            if(i%2===0){
                isPrime=false;
                break;
            }
        }
            if(isPrime){
                console.log(i);
            }
        
        
    }
}
primeNumber(10);