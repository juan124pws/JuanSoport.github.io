const Newyork = document.querySelector('.Newyork');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(Newyork)

Newyork.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
} )

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != Newyork ){
        
        menu.classList.toggle("spread")
    }
})
