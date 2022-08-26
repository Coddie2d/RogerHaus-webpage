const burgerclick = document.querySelector('.burger_lines');
const menuInner = document.querySelector('.menuinner')

burgerclick.addEventListener('click',event =>{
    const menuinner = document.querySelector('.menuinner');
    document.body.classList.toggle('lock');
    menuinner.classList.toggle('active'); 
   
})


menuInner.addEventListener('click',event =>{
    if(menuInner.classList.contains('active')){
        document.body.classList.remove('lock');
        menuInner.classList.remove('active'); 
    }
   
});
    
   
