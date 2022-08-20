function makeBlack(){
    flexItem.classList.add('black');
}

function makeNormal(){
    flexItem.classList.remove('black');
}


for (let j = 1; j < 17; j++) {
    const container = document.querySelector('#container');

    const flex = document.createElement('div');
    flex.classList.add('flex');
    //flex.textContent = 'Text';
    
    container.appendChild(flex);

    for (let i = 1; i <17; i++) {
        const flexContainer = document.querySelector('#flex');
        const flexItem = document.createElement('div');
        //flexItem.onmouseover = makeBlack;
        //flexItem.onmouseout = makeNormal;
        flexItem.classList.add('flexItem');
        //flexItem.textContent = 'flex'

        flex.appendChild(flexItem);

    }


}
/*const flexItems = document.querySelectorAll(".flexItem");
flexItems.forEach(flexI => flexI.addEventListener("mouseover", makeBlack));*/

/*const keys = document.querySelectorAll(".key");
keys.forEach( key => key.addEventListener("transitionend", removeTransition));*/

