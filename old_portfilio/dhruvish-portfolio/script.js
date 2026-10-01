const navWrap=document.querySelector('.nav-wrap');
const menu=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
window.addEventListener('scroll',()=>navWrap.classList.toggle('scrolled',window.scrollY>20));
menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const canvas=document.getElementById('particles'),ctx=canvas.getContext('2d');let dots=[];
function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);dots=Array.from({length:Math.min(65,Math.floor(innerWidth/18))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.3+.3,v:(Math.random()-.5)*.18}))}resize();addEventListener('resize',resize);
function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);dots.forEach((p,i)=>{p.y+=p.v;if(p.y<-5)p.y=innerHeight+5;if(p.y>innerHeight+5)p.y=-5;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=i%7===0?'rgba(230,184,92,.45)':'rgba(255,255,255,.18)';ctx.fill()});requestAnimationFrame(draw)}draw();


// Hero typewriter: cycles through the three core technologies.
const typedRole = document.getElementById('typed-role');
const roles = ['Python', 'Django', 'Odoo'];
let roleIndex = 0;
let charIndex = roles[0].length;
let deleting = true;

function typeRole(){
  if(!typedRole) return;
  const current = roles[roleIndex];
  if(!deleting){
    typedRole.textContent = current.slice(0, charIndex++);
    if(charIndex > current.length){
      deleting = true;
      setTimeout(typeRole, 1300);
      return;
    }
    setTimeout(typeRole, 115);
  } else {
    typedRole.textContent = current.slice(0, charIndex--);
    if(charIndex < 0){
      roleIndex = (roleIndex + 1) % roles.length;
      charIndex = 0;
      deleting = false;
      setTimeout(typeRole, 260);
      return;
    }
    setTimeout(typeRole, 65);
  }
}
setTimeout(()=>{
  roleIndex = 0;
  charIndex = roles[0].length;
  deleting = true;
  typeRole();
}, 900);
