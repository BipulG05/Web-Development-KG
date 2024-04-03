console.log("i am start");
let BagItems =[];
let innerHtml ='';
onLoad();


function onLoad(){
    
    displayItemsOnHomePage();
    displayBagItemsIcon()
}


// let item = {
//     item_image: './images/1.jpg',
//     rating:{
//         stars:4.5,
//         noOfReviews:1400
//     },
//     company_name:'Carton London',
//     item_name:'Rhodium-plated CZ Floral Studs',
//     current_price:606,
//     original_price:1040,
//     discount_percentage:42,
// };



// itemscontainerEle.innerHTML = `<div class="item-container">
// <img class="item-image" src="${item.item_image}" alt="product image">
// <div class="rating">
//     ${item.rating.stars} 🌟 | ${item.rating.noOfReviews}
// </div>
// <div class="company-name">${item.company_name}</div>
// <div class="item-name"> ${item.item_name}</div>
// <div class="price">
//     <span class="current-price">Rs ${item.current_price}</span>
//     <span class="original-price">Rs ${item.original_price}</span>
//     <span class="discount">(${item.discount_percentage} OFF)</span>
// </div>
// <button class="btn-add-bag">Add to Bag</button>
// </div>`;


function addToBag(itemID){
    let bagitemsStr = localStorage.getItem('BagItems');
    BagItems = bagitemsStr ? JSON.parse(bagitemsStr) : [];
    BagItems.push(itemID);
    localStorage.setItem('BagItems',JSON.stringify(BagItems));
    displayBagItemsIcon();
    
}

function displayBagItemsIcon(){
    let bagitemsStr = localStorage.getItem('BagItems');
    BagItems = bagitemsStr ? JSON.parse(bagitemsStr) : [];
    let bagItemCountEle = document.querySelector('.bag-items-count');
    if(BagItems.length>0){
        bagItemCountEle.style.visibility='visible';
        bagItemCountEle.innerHTML = BagItems.length;
    }
    else{
        bagItemCountEle.style.visibility='hidden';
    }
}

function displayItemsOnHomePage(){
    let itemscontainerEle = document.querySelector(".items-container");
    if(!itemscontainerEle){
        return;
    }
    items.forEach(item =>{
        innerHtml+=`<div class="item-container">
        <img class="item-image" src="${item.image}" alt="product image">
        <div class="rating">
            ${item.rating.stars} 🌟 | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name"> ${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage} OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`;
    });
    
    itemscontainerEle.innerHTML = innerHtml;
}



