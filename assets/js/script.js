// let scrollPercentage = () => {
//     let scrollProgress = document.getElementById("progress");
//     let progressValue = document.getElementById("progress-value");
//     let pos = document.documentElement.scrollTop;
//     let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     let scrollValue = Math.round( pos * 100 / calcHeight);

//     scrollProgress.style.background = `conic-gradient(#008fff ${scrollValue}%, rgba(255, 255, 255, 0.2) ${scrollValue}%)`;
//     progressValue.textContent = `${scrollValue}%`;
// }

// window.onscroll = scrollPercentage;
// window.onload = scrollPercentage;

// contactBtn.addEventListener('click',()=>{
//     window.scrollTo(0,document.body.scrollHeight);
// })
// Navbar ScrollSpy
let sections= document.querySelectorAll('.page-scroll');
let navLinks= document.querySelectorAll('header ul li a');
let temp = sections[sections.length-1];

sections.forEach(section=>{
    section.addEventListener('click',()=>{
        let id= section.getAttribute('id');
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('.page[href*=' + id + ']').classList.add('active');
            })
    })
})

window.onscroll=()=>{

    sections.forEach(section=>{

        let top= window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id= section.getAttribute('id');
        let viewportHeight= window.innerHeight;
        let viewportWidth= window.innerWidth;
        let scrollheight= document.body.scrollHeight;
        if(top+ viewportHeight/2>=offset && top<offset+ height){
            flg=1;
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('.page[href*=' + id + ']').classList.add('active');
            })
        }
        if(top<100){
            let id="top";
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('.page[href*=' + id + ']').classList.add('active');
            })
        }

        if(viewportWidth<900){
        if((top+viewportHeight-scrollheight<=viewportWidth/10&&top+viewportHeight-scrollheight>0)||(scrollheight-top-viewportHeight<=viewportWidth/10&& scrollheight-top-viewportHeight>0)){
                let id="contact";
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('.page[href*=' + id + ']').classList.add('active');
            })
            
        }
    }





    })
    
}

