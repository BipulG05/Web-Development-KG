function doGreeting(a = 'Dear'){
    let time = new Date;
    console.log(time.getHours())
    let hour = time.getHours();
    if(hour>6 && hour < 12){
        document.querySelector('.greeting').innerHTML = `<h2>Good Morning ${a}</h2>`;
    }
    else if(hour>12 && hour<18){
        document.querySelector('.greeting').innerHTML = `<h2>Good Afternoon ${a}</h2>`;
    }
    else{
        document.querySelector('.greeting').innerHTML = `<h2>Good Night ${a}</h2>`;
    }
}

let clickCount = localStorage.getItem('buttonCllicked') || 0;

function countClick(){
    clickCount++;
    // document.querySelector('#Click-count').innerHTML = clickCount;
    localStorage.setItem('buttonCllicked',clickCount);
    updateButton();
}
function updateButton(){
    let elemt = document.getElementById('Click-count');
    elemt.innerHTML = clickCount
    
    if(clickCount%2==0){
        // elemt.style.background = "green";
        elemt.classList.remove('js-odd');
        elemt.classList.add('js-even');

    }
    else{
        // elemt.style.background = "red";
        elemt.classList.remove('js-even');
        elemt.classList.add('js-odd');
    }
}
