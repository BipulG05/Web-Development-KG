function checkEvanOdd(a){
    // if(a%2==0){
    //     return 'Evan';
    // }
    // else{
    //     return 'odd';
    // }
    return a%2==0 ? 'even' : 'odd';
}

function maxIntwoNo(a,b){
    if(a>b){
        return `max no is ${a}`;
    }
    else if(b>a){
        return `max no is ${b}`;
    }
    else{
        return `no's are equal`;
    }
}

function celTofarn(a){
    return `${a} degree celsius is ${((9/5) * a + 32)} fehrenheit`;
}

console.log(checkEvanOdd(25))
console.log(maxIntwoNo(29,84))
console.log(celTofarn(38))