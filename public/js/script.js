//post time
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.post-time').forEach(element =>{
        const createdAt=new Date(element.getAttribute('data-created'));
        const updatedAt=new Date(element.getAttribute('data-updated'));
        let formattedTime;
        if(createdAt.getTime()=== updatedAt.getTime()){
            formattedTime = createdAt.toLocaleString('en-us',{
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })
        }else{
            formattedTime=updatedAt.toLocaleString('en-us',{
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })
        }
        element.innerText=formattedTime;
    })
   
})
//nav link
const navLinks=document.querySelectorAll('.navLink');

const currentPage=window.location.pathname;
console.log(currentPage)
navLinks.forEach(link =>{
    if(link.getAttribute('href')=== currentPage){
        link.classList.add("active");
    }
});
