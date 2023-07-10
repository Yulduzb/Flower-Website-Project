const menubtn=document.querySelector("#menu-btn");
const navbarleft=document.querySelector(".navbar-left-menu");
const navbmenu=document.querySelector("#navbmenu");



menubtn.addEventListener("click",function(){
navbarleft.classList.toggle("active")

document.addEventListener("click",function(e){
    if(
        !e.composedPath().includes(menubtn)&& 
        !e.composedPath().includes(navbarleft)
    )
    {
        navbarleft.classList.remove("active");
    }
})



});


window.addEventListener('resize', function() {
    var navbarleft = document.getElementById('navbmenu');
    if (window.innerWidth>=900) {
      navbarleft.classList.remove('active');
    } else {
    navbarleft.classList.add('active');
    }
  });
