const card=document.querySelector('.card');
for(let i=0 ; i<16*16 ; i++){
    const div=document.createElement('div');
    div.classList.add('grid');
    card.appendChild(div);
}
const grid=document.querySelectorAll('.grid');
const gridArray=Array.from(grid);
const color=document.querySelector('#input-color');
const reset=document.querySelector('#reset');
const erase=document.querySelector('#erase');
reset.addEventListener('click',function(e){
    gridArray.forEach((grid)=>{
        grid.style.backgroundColor='white';
    });
});
gridArray.forEach((grid) => {
    grid.addEventListener('mouseover', function(e) {
        grid.style.backgroundColor= color.value;
    });
});
