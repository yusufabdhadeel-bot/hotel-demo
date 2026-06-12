/* TESTIMONIAL SLIDER */

const testimonials = document.querySelectorAll(".testimonial");

let current = 0;

function rotateTestimonials() {

```
testimonials[current].classList.remove("active");

current++;

if(current >= testimonials.length){
    current = 0;
}

testimonials[current].classList.add("active");
```

}

setInterval(rotateTestimonials, 4000);

/* SCROLL ANIMATIONS */

const observer = new IntersectionObserver((entries)=>{

```
entries.forEach((entry)=>{

    if(entry.isIntersecting){
        entry.target.classList.add("show");
    }

});
```

},{
threshold:0.15
});

document.querySelectorAll(
".stat-card,.room-card,.amenity-card,.gallery-grid img,.section-title"
).forEach((el)=>{

```
el.classList.add("fade-up");

observer.observe(el);
```

});

/* NAVBAR EFFECT */

window.addEventListener("scroll",()=>{

```
const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

    navbar.style.background =
    "rgba(0,0,0,0.85)";

    navbar.style.boxShadow =
    "0 10px 30px rgba(0,0,0,0.4)";

}else{

    navbar.style.background =
    "rgba(0,0,0,0.35)";

    navbar.style.boxShadow =
    "none";
}
```

});

/* BOOKING BUTTON */

const bookingForm =
document.querySelector(".booking-form");

bookingForm.addEventListener("submit",(e)=>{

```
e.preventDefault();

alert(
  "Demo Booking Submitted! This can be connected to WhatsApp, Email, or a Hotel Management System."
);
```

});

/* SMOOTH APPEAR HERO */

window.addEventListener("load",()=>{

```
const heroContent =
document.querySelector(".hero-content");

heroContent.style.opacity = "0";
heroContent.style.transform =
"translateY(40px)";

setTimeout(()=>{

    heroContent.style.transition =
    "1.2s ease";

    heroContent.style.opacity = "1";

    heroContent.style.transform =
    "translateY(0)";

},200);
```

});
const counters =
document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

    const target =
    parseInt(counter.innerText);

    let count = 0;

    const update = ()=>{

        count += Math.ceil(target/100);

        if(count < target){

            counter.innerText = count;

            requestAnimationFrame(update);

        }else{

            counter.innerText = target;
        }

    };

    update();

});
window.addEventListener("scroll",()=>{

    const hero =
    document.querySelector(".hero");

    hero.style.backgroundPositionY =
    window.scrollY * 0.5 + "px";

});