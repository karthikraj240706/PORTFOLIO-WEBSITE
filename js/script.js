const toggleButton = document.getElementById("theme-toggle");

const currentTheme = localStorage.getItem("theme");

if(currentTheme==="light"){
document.documentElement.setAttribute("data-theme","light");
if(toggleButton){
toggleButton.innerHTML='<i class="fa-solid fa-sun"></i>';
}
}

if(toggleButton){

toggleButton.addEventListener("click",()=>{

const activeTheme=document.documentElement.getAttribute("data-theme");

if(activeTheme==="light"){

document.documentElement.removeAttribute("data-theme");

localStorage.setItem("theme","dark");

toggleButton.innerHTML='<i class="fa-solid fa-moon"></i>';

}else{

document.documentElement.setAttribute("data-theme","light");

localStorage.setItem("theme","light");

toggleButton.innerHTML='<i class="fa-solid fa-sun"></i>';

}

});

}

const sections=document.querySelectorAll("section");

const reveal=()=>{

sections.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-120){

section.style.opacity="1";

section.style.transform="translateY(0px)";

}

});

};

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition="all .8s ease";

});

window.addEventListener("scroll",reveal);

reveal();

const counters=document.querySelectorAll(".stat-card h3");

const animateCounter=(counter)=>{

const target=counter.innerText.replace("+","");

if(isNaN(target)) return;

let count=0;

const speed=Math.ceil(target/40);

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=counter.innerText.includes("+")?target+"+":target;

}else{

counter.innerText=count;

requestAnimationFrame(update);

}

};

update();

};

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.querySelectorAll(".stat-card h3").forEach(c=>animateCounter(c));

observer.unobserve(entry.target);

}

});

});

const heroStats=document.querySelector(".hero-stats");

if(heroStats){

observer.observe(heroStats);

}

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=form.querySelectorAll("input,textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

input.style.border="2px solid red";

valid=false;

}else{

input.style.border="1px solid rgba(255,255,255,.2)";

}

});

if(valid){

alert("Thank you! Your message has been recorded.");

form.reset();

}

});

}

const scrollButton=document.createElement("button");

scrollButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

scrollButton.style.position="fixed";
scrollButton.style.right="25px";
scrollButton.style.bottom="25px";
scrollButton.style.width="50px";
scrollButton.style.height="50px";
scrollButton.style.borderRadius="50%";
scrollButton.style.border="none";
scrollButton.style.background="#06b6d4";
scrollButton.style.color="#fff";
scrollButton.style.cursor="pointer";
scrollButton.style.display="none";
scrollButton.style.fontSize="18px";
scrollButton.style.boxShadow="0 15px 35px rgba(0,0,0,.3)";
scrollButton.style.zIndex="999";

document.body.appendChild(scrollButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

scrollButton.style.display="block";

}else{

scrollButton.style.display="none";

}

});

scrollButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

const links=document.querySelectorAll(".nav-links a");

links.forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.transform="translateY(-2px)";

});

link.addEventListener("mouseleave",()=>{

link.style.transform="translateY(0px)";

});

});

document.addEventListener("DOMContentLoaded",()=>{

document.body.style.opacity="0";

document.body.style.transition="opacity .6s ease";

setTimeout(()=>{

document.body.style.opacity="1";

},100);

});
