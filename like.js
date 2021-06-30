const likeBtn = document.querySelector(".like_btn");
let likeIcon=document.querySelector("#icon");
let count = document.querySelector("#count");

//button clicked
let clicked = false;

likeBtn.addEventListener("click",() =>{
    if(!clicked){
        clicked=true;
        likeIcon.innerHTML = `<i class=fas fa-thumbs-up"></i>`;
        count.textContent++;
    }else{
        clicked=false;
        likeIcon.innerHTML=`<i class="far fa-thumbs-up"></i>`;
        count.textContent--;
    }

});
var field=document.querySelector('textarea');
var backUp=field.getAttribute('placeholder');
var btn=document.querySelector('.btn');
var clear=document.getElementById('clear')

feild.onfocus=function(){
    this.setAttribute('placeholder','');
    this.style.borderColor='#333';
    btn.style.display='block'
}
feild.onblur=function(){
    this.setAttribute('placeholder',backUp);
    this.style.borderColor='#aaa';
}
clear.onclick=function(){
    btn.style.display='none';
    feild.value='';
}
