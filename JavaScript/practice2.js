// let Mytraprodct = {
//     name:'jeans',
//     size:'S',
//     fit:'slim fit',
//     'delivary-time' : 'Same day delivary',
// };
// let copyProd = Mytraprodct;

// console.log(Mytraprodct);
// console.log(copyProd);
// copyProd.size = 'XL';
// console.log(Mytraprodct);
// console.log(copyProd);
// Mytraprodct.name = 'Kid Jeans';
// console.log(Mytraprodct);
// console.log(copyProd);
// console.log(Mytraprodct['delivary-time']);
// console.log(Mytraprodct.delivary-time);

// let obj = {
//     message : 'good job',
//     status:'complete',
// };
// console.log(obj);
// let {message,status} = obj;
// console.log(message,status);
let Mytraprodct = {
    name:'jeans',
    size:'S',
    fit:'slim fit',
    'delivary-time' : 'Same day delivary',
};
let Mytraprodct1 = {
    name:'jeans',
    size:'M',
    fit:'slim fit',
    'delivary-time' : 'Same day delivary',
};
let copyProd = Mytraprodct;
let obj = {
    message : 'good job',
    status:'complete',
};

function isIdenticalProduct(prod1,prod2){
    if(typeof prod1 !=='object' || typeof prod2 !=='object'){
        // console.warn('They are not object');
        return 'They are not object';
    }
    if(prod1 == prod2){
        return true;
    }
    if(prod1.name===prod2.name && prod1.fit===prod2.fit && prod1.size===prod2.size){
        return true;
    }
    else{
        return false;
    }
    
}

// console.log(isIdenticalProduct(Mytraprodct,copyProd));
// console.log(isIdenticalProduct(copyProd,'34534'));
// console.log(isIdenticalProduct(Mytraprodct,obj));
// console.log(isIdenticalProduct(Mytraprodct,Mytraprodct1));




