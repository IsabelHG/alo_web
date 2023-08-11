var showMenu = false
function showHideNav() {
  let responsiveNav = document.getElementById("responsiveNav");
  let footNav = document.getElementById("footer-nav");
  let logoBlack = document.getElementById("logo-black");
  let logoWhite = document.getElementById("logo-white");
  let pointButton = document.getElementById("pointButton");
  const hiddenNav = responsiveNav.classList.contains("hidden");
  if (hiddenNav) {
    responsiveNav.classList.remove("hidden");
    footNav.classList.add("bg-aloGray");
    footNav.classList.add("border-aloWhite");
    footNav.classList.remove("bg-aloWhite");
    footNav.classList.remove("bg-aloGreen");
    footNav.classList.remove("border-aloGray");
    logoBlack.classList.add("hidden")
    logoWhite.classList.remove("hidden")
    pointButton.classList.add("fill-white");
    pointButton.classList.remove("fill-aloGray");
    showMenu = true
  } else {
    responsiveNav.classList.add("hidden");
    footNav.classList.remove("bg-aloGray");
    footNav.classList.remove("border-aloWhite");
    footNav.classList.add("bg-aloWhite");
    footNav.classList.add("border-aloGray");
    logoBlack.classList.remove("hidden")
    logoWhite.classList.add("hidden");
    pointButton.classList.add("fill-aloGray");
    pointButton.classList.remove("fill-white");
    showMenu = false
  }
}

if (window.innerWidth < 1024) {
  window.addEventListener("scroll", function () {
    if (!showMenu) {
      var navbar = document.querySelector("#footer-nav");
      const weare = document.getElementById("weare").getBoundingClientRect().top;
      const wedo = document.getElementById("wedo").getBoundingClientRect().top;
      const weconnect = document.getElementById("weconnect").getBoundingClientRect().top;
      const logoWhite = this.document.getElementById("logo-white");
      const logoBlack = this.document.getElementById("logo-black");
      const pointButton = this.document.getElementById("pointButton");
      // cambiar de color el nav al llegar a un div
      if (weare > 500) {
        navbar.classList.add("bg-aloWhite");
      } else {
        navbar.classList.remove("bg-aloWhite");
      }
      if (weare <= 500 && wedo > 650) {
        navbar.classList.add("bg-aloBrown");
      } else {
        navbar.classList.remove("bg-aloBrown");
      }
      if (wedo <= 650 && wedo > -11000) { // Cambiar el color al hacer scroll
        navbar.classList.add("bg-aloGreen");
      } else {
        navbar.classList.remove("bg-aloGreen");
      }
      if (wedo <= -11000 && weconnect > 650) {
        navbar.classList.add("bg-white");
      } else {
        navbar.classList.remove("bg-white");
      }
      if (weconnect <= 650) {
        navbar.classList.add("bg-aloGray");
        navbar.classList.add("border-aloWhite");
        pointButton.classList.add("fill-white");
        logoWhite.classList.remove("hidden");
        logoBlack.classList.add("hidden")
      } else {
        navbar.classList.remove("bg-aloGray");
        navbar.classList.remove("border-aloWhite");
        logoWhite.classList.add("hidden");
        pointButton.classList.remove("fill-white");
        logoBlack.classList.remove("hidden")
      }
    }
  });
}


let isAnimating = false;
function scrollHorizontally(e) {
  if (!isHorizontalScrollEnabled) {
    e.preventDefault();
    return;
  }

  // Detener cualquier animación anterior en curso
  if (isAnimating) return;
  isAnimating = true;

  e = window.event || e;
  const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  const scrollSpeed = 60;
  const scrollAmount = -delta * scrollSpeed;
  const scrollStep = 30; // Tamaño del paso para el desplazamiento (puedes ajustarlo según tus preferencias)

  // Función para animar el desplazamiento
  function animateScroll(totalSteps) {
    if (totalSteps <= 0) {
      isAnimating = false;
      return;
    }

    const step = Math.min(scrollStep, totalSteps);
    document.documentElement.scrollLeft += (scrollAmount * step / scrollSpeed);
    document.body.scrollLeft += (scrollAmount * step / scrollSpeed);

    // Utiliza requestAnimationFrame para una animación más fluida
    requestAnimationFrame(() => animateScroll(totalSteps - step));
  }

  // Comenzar la animación del scroll
  animateScroll(Math.abs(scrollAmount));
}

if (window.addEventListener) {
  if (window.innerWidth > 1023) {
    // IE9, Chrome, Safari, Opera
    window.addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    // IE 6/7/8
    window.attachEvent("onmousewheel", scrollHorizontally);
  }
}



gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const scrollDivs = document.querySelectorAll(".scroll-div");
scrollDivs.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    stopScrollHere.classList.remove("overflow-y-auto")
    const targetID = trigger.dataset.target;
    const targetPosition = mainContainer.querySelector(`#${targetID}`).offsetLeft;
    gsap.to(window, {
      scrollTo: targetPosition,
      duration: 1,
      ease: "power2.inOut",
    })
  });
});

const body = document.querySelector("body");
const mainContainer = body.querySelector(".main-container");
let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".box1", "translateX", "px"), // fast
  clamp = gsap.utils.clamp(-100, 100); // don't let the skew go beyond 20 degrees.

let scrollTween = gsap.to(".main-container", {
  xPercent: -100,
  x: () => window.innerWidth,
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    pin: "body",
    trigger: "body",
    start: "left left",
    end: () => `+=${mainContainer.offsetWidth} bottom`,
    scrub: 1,
    onUpdate: self => {
      let skew = clamp(self.getVelocity() / -100);

      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, {
          skew: 0,
          duration: 2,
          ease: "power3.easeInOut",
          overwrite: true,
          onUpdate: () => skewSetter(proxy.skew)
        });
      }
      const stopScrollHere = document.getElementById("prueba");
      const rect = stopScrollHere.getBoundingClientRect();
      const isVisible = rect.left >= -300 && rect.left < 300;

      if (isVisible) {
        stopScrollHere.classList.add("overflow-y-auto")
      }

      const prueba2 = document.getElementById("prueba2");
      const rect2 = prueba2.getBoundingClientRect();
      const isVisible2 = rect2.left >= -300 && rect2.left < 300;

      if (isVisible2) {
        prueba2.classList.add("overflow-y-auto")
      }

      const prueba3 = document.getElementById("prueba3");
      const rect3 = prueba3.getBoundingClientRect();
      const isVisible3 = rect3.left >= -300 && rect3.left < 300;

      if (isVisible3) {
        prueba3.classList.add("overflow-y-auto")
      }


      /*  const elementHidden = document.querySelectorAll(".element-show");
       elementHidden.forEach(element => {
         const rect = element.getBoundingClientRect();
         const childs = element.children;
         console.log(childs)
         const isVisible = rect.left < 300;
 
         if (isVisible) {
           console.log("visible")
           childs[0].classList.add("animate-elementShow")
           childs[1].classList.add("animate-elementShow")
           
         }
       }) */

      if (window.innerWidth > 1023) {
        const divWedo = document.getElementById("footer-nav");
        const logoBlack = document.getElementById("logo-black");
        const logoWhite = document.getElementById("logo-white");
        const igBlack = document.getElementById("ig-black");
        const igWhite = document.getElementById("ig-white");
        const instaIcon = document.getElementById("insta-icon");
        //const lkdinIcon = document.getElementById("lkdin-icon");
        const mediumIcon = document.getElementById("medium-icon");
        const twitIcon = document.getElementById("twit-icon");
        if (self.progress < 0.134) {
          divWedo.classList.add("bg-aloWhite")
        } else {
          divWedo.classList.remove("bg-aloWhite")
        }
        if (self.progress < 0.30 && self.progress >= 0.134) {
          divWedo.classList.add("bg-aloBrown")
        } else {
          divWedo.classList.remove("bg-aloBrown")
        }
        if (self.progress >= 0.30 && self.progress < 0.835) {
          divWedo.classList.add("bg-aloGreen")
        } else {
          divWedo.classList.remove("bg-aloGreen")
        }
        if (self.progress >= 0.835 && self.progress < 0.9228) {
          divWedo.classList.add("bg-white")
        } else {
          divWedo.classList.remove("bg-white")
        }
        if (self.progress >= 0.9228) {
          divWedo.classList.add("bg-aloGray")
          divWedo.classList.add("text-white")
          divWedo.classList.add("border-aloWhite")
          logoBlack.classList.add("hidden")
          logoWhite.classList.remove("hidden")
          igBlack.classList.add("hidden")
          igWhite.classList.remove("hidden")
          instaIcon.classList.add("fill-white");
          //lkdinIcon.classList.add("fill-white");
          mediumIcon.classList.add("fill-white");
          twitIcon.classList.add("fill-white");
          instaIcon.classList.remove("fill-aloGray");
          //lkdinIcon.classList.remove("fill-aloGray");
          mediumIcon.classList.remove("fill-aloGray");
          twitIcon.classList.remove("fill-aloGray");
        } else {
          divWedo.classList.remove("bg-aloGray")
          divWedo.classList.remove("text-white")
          logoBlack.classList.remove("hidden")
          logoWhite.classList.add("hidden");
          igBlack.classList.remove("hidden")
          igWhite.classList.add("hidden");
          instaIcon.classList.remove("fill-white");
          //lkdinIcon.classList.remove("fill-white");
          mediumIcon.classList.remove("fill-white");
          twitIcon.classList.remove("fill-white");
          instaIcon.classList.add("fill-aloGray");
          //lkdinIcon.classList.add("fill-aloGray");
          mediumIcon.classList.add("fill-aloGray");
          twitIcon.classList.add("fill-aloGray");
          divWedo.classList.remove("border-aloWhite")
          divWedo.classList.add("border-aloGray")
        }
      }
    }
  }
});

// Obtener todos los elementos con la clase "scroll-trigger"
const scrollTriggers = document.querySelectorAll(".scroll-trigger");

// Agregar un evento de clic a cada elemento "span"
scrollTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    // Obtener el ID del div al que se debe desplazar
    const targetID = trigger.dataset.target;

    // Obtener la posición del div objetivo horizontalmente
    const targetPosition = mainContainer.querySelector(`#${targetID}`).offsetLeft;

    // Realizar la animación de desplazamiento suave usando ScrollToPlugin
    gsap.to(window, {
      scrollTo: targetPosition, // Cambia "100" por la distancia que desees entre el borde superior del div y la parte superior de la ventana
      duration: 1, // Duración de la animación en segundos
      ease: "power2.inOut", // Curva de animación, puedes ajustarla según tus preferencias
    });
  });
});

function animateElement(element) {
  gsap.to(element, {
    duration: 1,
    opacity: 1,
    ease: "power2.inOut",
  })

}

function onElementInView(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateElement(entry.target)
      observer.unobserve(entry.target)
    }
  })
}

const elements = document.querySelectorAll(".element-show");

const observer = new IntersectionObserver(onElementInView, { threshold: 0.5 })

elements.forEach(element => {
  observer.observe(element)
})