// let header = document.querySelector('#header').addEventListener()
function  nav(){

}

var scrollBefore = 0;

window.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;

    if(scrollBefore > scrolled){
        scrollBefore = scrolled;
        let nav = document.querySelector('#header').style.position = "fixed"

        
    }else{
        scrollBefore = scrolled;
        let nav = document.querySelector('#header').style.position = "absolute"

    }

})