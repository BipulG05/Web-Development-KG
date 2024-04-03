let nos = [1,2,3,4,5,7];
// console.log(nos);
// console.log(nos[5]);

let onj = {ikj:98};
let soot = [1,true,null,'adadaa'];

// console.log(soot[3]);
// console.log(typeof soot);

// console.log(Array.isArray(soot));
// console.log(Array.isArray(onj));

// let arr = [1,2,4];

// console.log(arr);

// arr.push(6);

// console.log(arr);
// console.log('popped : ' + arr.pop());
// console.log(arr);


// let arr = [1,2,3,4,5,6]
// console.log(arr);
// arr.splice(1,3);
// console.log(arr);

let arr = [1,2,6,4,5,3];
let Aarr = ['A','F','B','C','D','E'];
// console.log(arr.toString());
// console.log(arr);
arr.sort();
Aarr.sort();
// console.log(arr);
// console.log(Aarr)
let [a,b,c,d] = arr;
// console.log(a + " " + b + " " + c + " " + d);




// for(let i=0;i<10;i++){
//     console.log(i+" ");
// }
// let i =0;
// while(i<10){
//     console.log(i+" ");
//     i++;
// }

// let i=0;
// i=11;
// do{
//     console.log(i+" ");
//     i++;
// }while(i<10);
function arrCopy(arr) {
    return arr.slice(0,arr.length)
}
let arr1 = [1,2,4,6,7,7]

let arr2 = arrCopy(arr1);
arr2[0] = 10;

// console.log(arr1);
// console.log(arr2);

function isPrime(no){
    for(let i=2;i<no;i++){
        if(no%i==0)
            return false;
    }
    return true;
}
// console.log(isPrime(4));
// console.log(isPrime(27));
// console.log(isPrime(71));
let no=2;
let i=0;
// while(i < 5){
//     if(isPrime(no)){
//         console.log(no);
//         i++;
//     }
//     no++;
// }

// while(true){
//     if(isPrime(no)){
//         console.log(no);
//         i++;
//         if(i >= 5) break;
//     }
//     no++;
// }
i=10;
// while(--i > 0){
//     console.log(i);
// }

// while(i-- > 1){
//     console.log(i);
// }

// let arr3 = [1,6,3 ,-4,2, -7];

// for(i=0;i<arr3.length;i++){
//     if(arr3[i]<0){
//         continue;
//     }
//     console.log(arr3[i]);
// }

let str1 = ['kg','coding','java','yes'];

let rest ='';

for(let j=0;j<str1.length;j++){
    rest = rest + str1[j] + ' ';
}
// console.log(rest);

console.log(str1.join(" "));

// str1.forEach(str=>
//     console.log(str)
// );

// foreach bad use *************
// function search(arr,str){
//     str1.forEach((index,ele)=>
//         {if(ele==str){
//             console.log('Yes');
//             return;
//         }
//         console.log('No');}

//     );
// }
// search(str1,'java');

// filter ************************

let nums = [1,2,3,4,5,6,8,7];

let newArr = nums.filter((num,index)=>{
    if(num%2==0){
        return false;
    }else{
        return true;
    }
})
// console.log(newArr1);

let newArr2 = nums.filter(num=>{
    if(num%2==0) return true;
})
// console.log(newArr2);

// Map *****************************************

let serNo = nums.map(no=>  no*no)
console.log(serNo);

