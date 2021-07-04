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

//header
