const grid = document.querySelector('#tiles-container');
const cell = document.querySelector('.cell');
const btnClear = document.querySelector('#clearTiles');
const colorPick = document.querySelector('#colorPick');
const eraser = document.getElementById("eraser");

let rangeSlider = document.querySelector('#slider');
rangeSlider.value = 16;
let output = document.querySelector('#sliderValue');
output.innerHTML = rangeSlider.value;

rangeSlider.oninput = function(){
    output.innerHTML = this.value;
    sliderValue = Math.floor(Math.sqrt(this.value));
    //clearGrid();
    createGrid(sliderValue);
}

btnClear.addEventListener('click', function(){
    console.log('clear tiles');
    clearGrid();
    createGrid(sliderValue);
})

createGrid(4);

function clearGrid(){
    grid.innerHTML = ''
}

function createGrid(size){
    clearGrid();
    //makes grid responive to the amount of tiles
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i < size * size; i++){
        //creates one tile
        var tile = document.createElement('div');
        //adds classes to tile object
        tile.classList.add('grid');
        tile.classList.add('cell');

        //tile.addEventListener('mousedown', changeColor);
        tile.addEventListener('mousedown', (e)=>{
            console.log('ete')
            if(eraser.checked){
                e.target.style.backgroundColor = "rgb(234, 225, 225)"
            }
            else{
                currentColor = colorPick.value;
                e.target.style.backgroundColor = currentColor;
            }
        });

        //adds it to the page so you can see it
        grid.appendChild(tile);
    }
}

let currentColor;





