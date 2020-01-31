mainContainer = document.getElementById('main')

mainContainer.style.cssText = 
    `display: grid;
    grid-template-columns: repeat(16, 80px); 
    grid-template-rows: repeat(16, 80px);
    `;

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
    
        let newDiv = document.createElement('div')
        newDiv.className = 'square';
        newDiv.title = 'Row: ' + i + ' Column: ' + j;

        mainContainer.appendChild(newDiv);
    }
    
    function mouseOver(e) {
        this.style.backgroundColor = 'red';
    }

    const allDivs = Array.from(document.querySelectorAll('.square'));
    allDivs.forEach(div => div.addEventListener('mouseover', mouseOver));

    function clearOut() {
        allDivs.forEach(div => div.style.backgroundColor = 'white');
    }

}