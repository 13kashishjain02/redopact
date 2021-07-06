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







////////////////////////////////////////Product Search////////////////////////////////////////
const productItemName = document.querySelector('.product-item-name');
const productNumber = document.querySelector('.product-number');
const  productImg  = document.querySelectorAll('.product-img ');
const productName = document.querySelectorAll('.p-name');
const productPrice = document.querySelectorAll('.p-price');
const productSearch = document.getElementById('inptxs_srch');
const searchBtn = document.getElementById('srch');
const productList = document.getElementById('productList');

//event listeners
searchBtn.addEventListener('click',getProductList);


//get product list that matches with the input keyword
function getProductList(){
    let searchInputTxt = document.getElementById('inptxs_srch').value.trim();
    console.log(searchInputTxt);
} 

