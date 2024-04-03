let mul = (a,b) => a*b;

// console.log(mul(3,4));

let printGt = () => console.log("good");

let runtwice = inputfunction => {
    inputfunction();
    inputfunction();
}

// runtwice(printGt);

function doubleSize(){
    let btnEle = document.querySelector('.Subscribe');

    btnEle.classList.add('js-size-double');
}

let btnEle = document.querySelector('.Subscribe');

// btnEle.addEventListener('click',doubleSize);
btnEle.addEventListener('click',event=>
    setTimeout(doubleSize,2000)
);

let arr = [1,2,3,4,56,6,7];
let sum =0;
arr.forEach(num=>sum+=num)
// console.log(sum);

let sqr = arr.map(n=>n*n);

// console.log(sqr);