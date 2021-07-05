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

//login

const inputs = document.querySelectorAll(".input");


function addcl(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});

//forgot password

const forgotPwd = document.querySelector(".forgot-pwd");
const forgotPassword = document.querySelector(".forgot-password");
const loginContainer = document.querySelector(".container");

forgotPassword.addEventListener('click',()=>{
    forgotPwd.style.display = 'block';
    loginContainer.style.filter = 'blur(10px)';
})

