// ==================== Page Preloader JS ==================== //
const preloader = document.querySelector('.page_preloader');

window.addEventListener('load', () => {    
    setTimeout(() => {
        preloader.style.display = "none";
    }, 2000);
})