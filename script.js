class Navigation{
    mobileMenuButton = null;
    mobileMenu = null;
    mobileMenuButtonClass = "humburger";
    mobileMenuClass = "mobil-nav-panel";
    constructor(){
        this.init();
        this.bineEvents();
    }
    init(){
        this.mobileMenu = document.querySelector(`.${this.mobileMenuClass}`);
        this.mobileMenuButton = document.querySelector(`.${this.mobileMenuButtonClass}`);
    }
    bineEvents(){
        if (this.mobileMenu == undefined || this.mobileMenuButton == undefined){
            console.log("Error");
            return;
        }

        this.mobileMenuButton.addEventListener("click", () =>{
            this.mobileMenu.classList.toggle('active');
        })
    }
}
document.addEventListener('DOMContentLoaded', ()=>{
    new Navigation();
})