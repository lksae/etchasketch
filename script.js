let amount = 100;

function makeBlack(){
    flexItem.classList.add('black');
}

function makeNormal(){
    flexItem.classList.remove('black');
}


for (let i = 0; i < amount; i++) {
    const container = document.querySelector('#container');

    const flex = document.createElement('div');
    flex.classList.add('flex');
    //flex.textContent = 'Text';
    
    container.appendChild(flex);

    for (let i = 0; i <amount; i++) {
        const flexContainer = document.querySelector('#flex');
        const flexItem = document.createElement('div');
        //flexItem.onmouseover = makeBlack;
        //flexItem.onmouseout = makeNormal;
        flexItem.classList.add('flexItem');
        //flexItem.textContent = 'flex'

        flex.appendChild(flexItem);

    }


}

let heightAndWidth = 768 / amount - 2;
const flexCollection = document.querySelectorAll(".flexItem");
flexCollection.forEach(flexI => flexI.style.height= `${heightAndWidth}px`);//setAttribute("style","width:60px"));
flexCollection.forEach(flexI => flexI.style.width= `${heightAndWidth}px`);//setAttribute("style","height:60px"));


/*flexCollection.forEach(element => {
    element.setAttribute("style","width:50px")
});
//setAttribute("style","width:500px")
/*const flexItems = document.querySelectorAll(".flexItem");
flexItems.forEach(flexI => flexI.addEventListener("mouseover", makeBlack));
getElementsByClassName*/

/*const keys = document.querySelectorAll(".key");
keys.forEach( key => key.addEventListener("transitionend", removeTransition));*/

