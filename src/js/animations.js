function showHideNav() {
  let responsiveNav = document.getElementById("responsiveNav");
  const hiddenNav = responsiveNav.classList.contains("hidden")
  if (hiddenNav) {
    responsiveNav.classList.remove("hidden");
  } else {
    responsiveNav.classList.add("hidden");
  }
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
        } else {
          divWedo.classList.remove("bg-aloGray")
          divWedo.classList.remove("text-white")
          logoBlack.classList.remove("hidden")
          logoWhite.classList.add("hidden");
          igBlack.classList.remove("hidden")
          igWhite.classList.add("hidden");
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
      console.log(entry.target)
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