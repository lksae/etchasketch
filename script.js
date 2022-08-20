for (let i = 1; i < 16; i++) {
    const container = document.querySelector('#container');

    const flex = document.createElement('div');
    flex.classList.add('flex');
    //flex.textContent = 'Text';
    
    container.appendChild(flex);

    for (let i = 1; i <16; i++) {
        const flexContainer = document.querySelector('#flex');
        const flexItem = document.createElement('div');
        flexItem.classList.add('flexItem');
        //flexItem.textContent = 'flex'

        flex.appendChild(flexItem);

    }
}

