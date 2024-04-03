// anonymous function *****************

let sum = function (a,b){
    return a+b;
}
// let newSum = sum;
// console.log(sum(2,3));
// console.log(newSum(2,3));

// ((4 + 5) +7)

let sumTreeNo = function(no1,no2,no3,sumTwoNo){
    let sum1 = sumTwoNo(no1,no2);
    return sumTwoNo(sum1,no3);
}

// console.log(sumTreeNo(4,3,7,sum));

// console.log(typeof sum);
// console.log(typeof sumTreeNo);

// Arrow function *********************

// let sumAro = (no,no2) => {return (no+no2)};
let sumAro = (no,no2) =>  (no+no2);

// console.log(sumAro(2,3));

// let sqr = no => {return no*no};
let sqr = no => no*no;

// console.log(sqr(45));

// let alarm = function () {
//     console.log('good morning');
// };

let alarm =  () => {
    console.log(`good morning ${new Date}`);
};

// console.log('sending ...');
// // setTimeout(alarm,2000);
// setTimeout(() =>{
//     console.log('good morning');
// },2000);

// console.log('sending ...');
// let timeId = setTimeout(alarm,2000);
// console.log(`alerm id ${timeId}`);
// clearTimeout(timeId)

// let inetId = setInterval(alarm,3000);

// setTimeout(()=> clearInterval(inetId),5000);

let btn  = document.querySelector('#myBtn');

// btn.addEventListener('click',event => console.log("I am Clicked"));

// let work = event => console.log("I am Clicked");
// btn.addEventListener('click',work);

// let datePrint = event => console.log(new Date);

// btn.addEventListener('click',datePrint);

// btn.removeEventListener('click',work);



