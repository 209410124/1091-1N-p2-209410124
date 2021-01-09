const showMenu = (toggleId, navId) => {
    const toggle=document.getElementById(toggleId);
    const nav =document.getElementById(navId)
    console.log(toggle);
    console.log(nav);
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show');
            toggle.classList.toggle('bx-x');
        });
    }
}

showMenu('header-toggle','nav-menu');