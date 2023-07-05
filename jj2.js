document.querySelector('.cross').Style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
document.querySelector('.sidebar').classList.toggle('sidebargo');
if(document.querySelector('.sidebar').classList.toggle('sidebargo')){
    document.querySelector('.cross').Style.display='inline';
    document.querySelector('.cross').Style.display='none';
}
})