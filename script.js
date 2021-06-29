//tag section
const tagS = document.getElementsByClassName('tag');
const tagCrosses = document.getElementsByClassName('fas fa-cross');

tagCross.addEventListener('click', removeTag);

tagCrosses.forEach(tagCross =>{
    tagCross.addEventListener('click',removeTag);
})
function removeTag(){

    tagS.forEach(tag => {
        tag.style.display = 'none';
    });
}


//nav-bar
 
var prevScrollpos = window.pageYOffset;

window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos){
        document.getElementById('header').style.top = "0";
    }
    else{
        document.getElementById('header').style.top = "-100px";
    }

    prevScrollpos = currentScrollPos;
}


