const typed = new Typed(".animation" , {
    strings:
    ["Frontend Developer","Backend Developer", "Software Engginer"],
    typeSpeed :100,
    backSpeed :100,
    backDelay :1000,
    loop:true
});

document.addEventListener('DOMContentLoaded', ()=> {
    function toggleSwitch() {
        const sun = document.getElementById('sun');
        const moon = document.getElementById('moon');
        const box = document.getElementById('div-switch');
    
        box.classList.toggle('switch-box2');
        box.classList.toggle('switch-box');
    
        sun.classList.toggle('hidden');
        moon.classList.toggle('hidden');
    };
    
    document.getElementById('moon').addEventListener('click', ()=> {
        toggleSwitch();
        const a = document.querySelectorAll('ul li a');
        const p = document.querySelectorAll('p');
        const h3 = document.querySelectorAll('h3');
        const h4 = document.querySelectorAll('h4');
        const svg = document.querySelectorAll('svg');
        const border = document.getElementsByClassName('skills');
        const h2 = document.querySelectorAll('h2');
        const portbox = document.getElementsByClassName('portbox');
        const div = document.querySelectorAll('.MySkills div');
    
        for(let i=0; i<a.length; i++){
            a[i].style.color = 'black';
            a[i].classList.add('a-after');
        }
        for(let x=0; x<p.length; x++){
            p[x].style.color = 'black';
        }
        for(let y=0; y<h3.length; y++){
            h3[y].style.color = 'black';
        }
        for(let z=0; z<h4.length; z++){
            h4[z].style.color = 'black';
        }
        for(let j=0; j<svg.length; j++){
            svg[j].style.color = 'black';
        }
        for(let u=0; u<border.length; u++){
            border[u].style.border = '1px solid black';
        }
        for(let b=0; b<h2.length; b++){
            h2[b].style.color = 'black';
        }
        for(let c=0; c<portbox.length; c++){
            portbox[c].style.background = '#CDC1FF';
            portbox[c].style.boxShadow = '4px 4px 2px black';
        }
        for(let h=0; h<div.length; h++){
            div[h].style.boxShadow= '4px 4px 2px black';
        }
        
        document.body.style.background = '#E5D9F2';
        const foot = document.getElementById('contact');
        foot.style.backgroundColor='#F5EFFF';
    });
    
    document.getElementById('sun').addEventListener('click', ()=> {
        toggleSwitch();
        const a = document.querySelectorAll('ul li a');
        const p = document.querySelectorAll('p');
        const h3 = document.querySelectorAll('h3');
        const h4 = document.querySelectorAll('h4');
        const svg = document.querySelectorAll('svg');
        const border = document.getElementsByClassName('skills');
        const h2 = document.querySelectorAll('h2');
        const por = document.querySelectorAll('.portbox');
        const div = document.querySelectorAll('.MySkills div');

        for(let i=0; i<a.length; i++){
            a[i].style.color = 'white';
            a[i].classList.remove('a-after');
        }
        for(let x=0; x<p.length; x++){
            p[x].style.color = 'white';
        }
        for(let y=0; y<h3.length; y++){
            h3[y].style.color = 'white';
        }
        for(let z=0; z<h4.length; z++){
            h4[z].style.color = 'white';
        }
        for(let j=0; j<svg.length; j++){
            svg[j].style.color = 'white';
        }
        for(let u=0; u<border.length; u++){
            border[u].style.border = '1px solid white';
        }
        for(let b=0; b<h2.length; b++){
            h2[b].style.color = 'white';
        }
        for(let d=0; d<por.length; d++){
            por[d].style.backgroundColor = '#222831';
            por[d].style.boxShadow = '4px 4px 2px #00ADB5';
        }
        for(let h=0; h<div.length; h++){
            div[h].style.boxShadow= '4px 4px 2px #00ADB5';
        }
        
        document.body.style.background = 'linear-gradient(#222831 20%,#393E46 80%)';
        const foot = document.getElementById('contact');
        foot.style.backgroundColor='#222831';
    });
});

///burger

const burger = document.getElementById('burger').addEventListener('click', ()=>{
    const navigasi = document.getElementById('burgers');
    navigasi.classList.toggle('ul');
    navigasi.classList.toggle('uls');
});
