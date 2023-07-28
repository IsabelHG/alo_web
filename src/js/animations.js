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

const body = document.querySelector("body");
const mainContainer = body.querySelector(".main-container");
let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".box1", "skewY", "deg"), // fast
  clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

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
      let skew = clamp(self.getVelocity() / -300);

      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, {
          skew: 0,
          duration: 0.8,
          ease: "power3.easeInOut",
          overwrite: true, onUpdate: () => skewSetter(proxy.skew)
        });
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


const wedoDiv = mainContainer.querySelector("#wedo");
const scrollDivs = document.querySelectorAll(".scroll-div");

// Agregar un evento de clic a cada elemento "span"
scrollDivs.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    // Obtener el ID del div al que se debe desplazar
    const targetID = trigger.dataset.target;

    console.log(targetID);
    // Obtener la posición del div objetivo horizontalmente
    const targetPosition = document.querySelector(`#${targetID}`).offsetLeft;

    console.log(targetPosition)
    // Realizar la animación de desplazamiento suave usando ScrollToPlugin
    gsap.to(window, {
      scrollTo: targetPosition, // Cambia "100" por la distancia que desees entre el borde superior del div y la parte superior de la ventana
      duration: 1, // Duración de la animación en segundos
      ease: "power2.inOut", // Curva de animación, puedes ajustarla según tus preferencias
    });
  });
});

// Seleccionar las imágenes
const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');

// Crear la animación infinita
function animateImages() {
  gsap.timeline({ repeat: -1 })
    .to(image1, { duration: 1, scaleX: 0, xPercent: 100, ease: "power2.inOut" }) // Escalamos y desplazamos la imagen 1 hacia la derecha
    .to(image2, { duration: 2, opacity: 1 }) // Mostramos la imagen 2
    .to(image1, { duration: 0, scaleX: 1 }) // Reiniciamos el escalado de la imagen 1
    .to(image1, { duration: 0, opacity: 0 }) // Ocultamos la imagen 1
    .to(image2, { duration: 1, scaleX: 1, xPercent: 0, ease: "power2.inOut" }); // Escalamos y desplazamos la imagen 2 hacia la izquierda para mostrarla completamente
}

// Iniciar la animación
animateImages();