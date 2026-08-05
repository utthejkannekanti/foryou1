// =========================
// Page Change + Auto Music
// =========================
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

const buttons = document.querySelectorAll(".nextBtn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        // Start music on first click
        if (!playing) {

            music.play();

            music.volume = 0.4;

            playing = true;

            musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';

        }

        // Next page
        let nextPage = this.getAttribute("data-next");

        // Hide all pages
        document.querySelectorAll(".page").forEach(page => {

            page.classList.remove("active");

        });

        // Show next page
        // document.getElementById(nextPage).classList.add("active");
        const page = document.getElementById(nextPage);

if(page){

page.classList.add("active");

}
    });

});



/* ==========================
   BACKGROUND MUSIC
========================== */
musicBtn.onclick = function () {

    if (playing) {

        music.pause();
        playing = false;

        musicBtn.innerHTML = '<i class="fa-solid fa-music"></i>';

    } else {

        music.play();

        playing = true;

        musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';

    }

};

// =========================
// Loader
// =========================

window.onload = function(){

    setTimeout(function(){

        let loader = document.getElementById("loader");

        if(loader){

            loader.style.display="none";

        }

    },3000);

};


// =========================
// Fireworks
// =========================

const fireContainer = document.getElementById("fireworks");

function createFirework(){

    if(!fireContainer) return;

    const fire = document.createElement("div");

    fire.className="fire";

    fire.style.left=Math.random()*window.innerWidth+"px";

    fire.style.top=Math.random()*350+"px";

    fire.style.background=
    `hsl(${Math.random()*360},100%,60%)`;

    fireContainer.appendChild(fire);

    setTimeout(()=>{

        fire.remove();

    },1000);

}

setInterval(createFirework,400);

const photos = document.querySelectorAll(".slidePhoto");

if (photos.length > 0) {

    let current = 0;

    setInterval(() => {

        photos[current].classList.remove("active");

        current = (current + 1) % photos.length;

        photos[current].classList.add("active");

    }, 5000);

}

/* ===========================
   REAL PARTICLE FIREWORKS
=========================== */

const fireworks = document.getElementById("fireworks3");

if (fireworks) {

    setInterval(() => {

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * 350 + 50;

        for (let i = 0; i < 35; i++) {

            const particle = document.createElement("span");

            particle.className = "particle";

            particle.style.left = x + "px";
            particle.style.top = y + "px";

            particle.style.setProperty("--x", (Math.random() - 0.5) * 350 + "px");
            particle.style.setProperty("--y", (Math.random() - 0.5) * 350 + "px");

            particle.style.background =
                `hsl(${Math.random() * 360},100%,60%)`;

            fireworks.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 1800);

        }

    }, 1400);

}
/* ===========================
       FLOATING HEARTS
=========================== */
const heartsContainer = document.querySelector(".hearts3");

if (heartsContainer) {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        const hearts = ["❤️","💖","💕","💗","💓","💞"];

        heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

        heart.style.left = Math.random()*100 + "%";

        heart.style.fontSize = (18 + Math.random()*28) + "px";

        heart.style.animationDuration = (5 + Math.random()*5) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        },10000);

    },250);

}
/* ===========================
   HOME STARS
=========================== */

const starsHome = document.querySelector(".starsHome");

if (starsHome) {

    for (let i = 0; i < 200; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";

        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay = Math.random() * 2 + "s";

        star.style.animationDuration = (1 + Math.random() * 3) + "s";

        star.style.width = (2 + Math.random() * 3) + "px";

        star.style.height = star.style.width;

        starsHome.appendChild(star);

    }

}
/* ===========================
   HOME FIREWORKS
=========================== */

const homeFireworks = document.getElementById("homeFireworks");

if (homeFireworks) {

    setInterval(() => {

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * 350 + 50;

        for (let i = 0; i < 40; i++) {

            const particle = document.createElement("span");

            particle.className = "homeParticle";

            particle.style.left = x + "px";
            particle.style.top = y + "px";

            particle.style.setProperty("--x", (Math.random() - 0.5) * 300 + "px");
            particle.style.setProperty("--y", (Math.random() - 0.5) * 300 + "px");

            particle.style.background =
                `hsl(${Math.random() * 360},100%,60%)`;

            homeFireworks.appendChild(particle);

            setTimeout(() => {

                particle.remove();

            }, 1800);

        }

    }, 1500);

}
/*=========================================
        LOVE CANVAS
==========================================*/

const canvas = document.getElementById("loveCanvas");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles=[];

for(let i=0;i<170;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

vx:(Math.random()-0.5)*0.8,

vy:(Math.random()-0.5)*0.8,

size:2+Math.random()*3

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

/* Draw Dots */

particles.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

if(p.x<0||p.x>canvas.width)p.vx*=-1;
if(p.y<0||p.y>canvas.height)p.vy*=-1;

ctx.beginPath();

ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

ctx.fillStyle="white";

ctx.shadowBlur=15;
ctx.shadowColor="white";

ctx.fill();

});

/* Draw Connecting Lines */

for(let i=0;i<particles.length;i++){

for(let j=i+1;j<particles.length;j++){

let dx=particles[i].x-particles[j].x;

let dy=particles[i].y-particles[j].y;

let distance=Math.sqrt(dx*dx+dy*dy);

if(distance<130){

ctx.beginPath();

ctx.moveTo(particles[i].x,particles[i].y);

ctx.lineTo(particles[j].x,particles[j].y);

ctx.strokeStyle="rgba(255,105,180,.18)";

ctx.lineWidth=1;

ctx.stroke();

}

}

}

requestAnimationFrame(animate);

}

animate();

}

/*====================================
     Floating Hearts
=====================================*/
const page4 = document.getElementById("page4");

if(page4){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="loveHeart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(8+Math.random()*6)+"s";

heart.style.fontSize=(15+Math.random()*25)+"px";

page4.appendChild(heart);

setTimeout(()=>{

heart.remove();

},14000);

},450);

}