if (window.innerWidth < 1024) {
  // Obtener el elemento sticky 
  let stickyElements = document.querySelectorAll(".stickyElement");
  stickyElements.forEach(myFunction);
  function myFunction(item) {
    // Obtener su altura 
    let heightSticky = item.offsetHeight; 
    // Asignarla directamente a la propiedad top 
    item.style.top = "calc(-" + heightSticky + 'px + 85vh)';
  }
} else if (window.innerWidth >= 1024) {
  // Obtener el elemento sticky 
  let stickyElements = document.querySelectorAll(".stickyElement");
  stickyElements.forEach(myFunction);
  function myFunction(item) {
    // Obtener su altura 
    let widthSticky = item.offsetWidth; 
    // Asignarla directamente a la propiedad top 
    item.style.left = "calc(-" + widthSticky + 'px + 100vw)';
  }
}

function obtenerPosicion(elemento) {
  let x = 0; // posición horizontal
  let y = 0; // posición vertical
  while (elemento) { // mientras el elemento tenga un padre
    x += elemento.offsetLeft; // sumar la distancia horizontal del elemento al padre
    y += elemento.offsetTop; // sumar la distancia vertical del elemento al padre
    elemento = elemento.offsetParent; // asignar el padre como el nuevo elemento
  }
  return { x: x, y: y }; // devolver un objeto con las coordenadas
}

let elementoHome = document.getElementById("home"); // obtener el elemento por su id
let posicionHome = obtenerPosicion(elementoHome); // llamar a la función para obtener su posición
let elementoWeAre = document.getElementById("weareline"); // obtener el elemento por su id
let posicionWeAre = obtenerPosicion(elementoWeAre); // llamar a la función para obtener su posición
let elementoWeDo = document.getElementById("wedo"); // obtener el elemento por su id
let posicionWeDo = obtenerPosicion(elementoWeDo); // llamar a la función para obtener su posición
let elementoOurPassions = document.getElementById("ourpassions"); // obtener el elemento por su id
let posicionOurPassions = obtenerPosicion(elementoOurPassions); // llamar a la función para obtener su posición
let elementoWeConnect = document.getElementById("weconnect"); // obtener el elemento por su id
let posicionWeConnect = obtenerPosicion(elementoWeConnect); // llamar a la función para obtener su posición
let elementoFinal = document.getElementById("animationFinal"); // obtener el elemento por su id
let posicionFinal = obtenerPosicion(elementoFinal); // llamar a la función para obtener su posición

let menuBar = document.getElementById("footer-nav");

const instaIcon = document.getElementById("insta-icon");
const lkdinIcon = document.getElementById("lkdin-icon");
const mediumIcon = document.getElementById("medium-icon");
const twitIcon = document.getElementById("twit-icon");
const logoNav = document.getElementById("logoNav");

function colorWhite() {
  menuBar.classList.add("bg-aloWhite");
  menuBar.classList.remove("bg-aloBrown");
}

function colorBrown() {
  menuBar.classList.add("bg-aloBrown")
  menuBar.classList.remove("bg-aloWhite");
  menuBar.classList.remove("bg-aloGreen");
  menuBar.classList.remove("bg-aloGray");
}

function colorGreen() {
  menuBar.classList.add("bg-aloGreen")
  menuBar.classList.remove("bg-aloBrown");
  menuBar.classList.remove("bg-aloWhite");
}

function colorGray() {
  menuBar.classList.add("bg-aloGray")
  menuBar.classList.remove("bg-aloWhite");
  menuBar.classList.remove("bg-aloGreen");
}

function textGray() {
  menuBar.classList.remove("text-white");
  menuBar.classList.remove("border-aloWhite");
  logoNav.classList.remove("fill-white");
  pointButton.classList.remove("fill-white");
  instaIcon.classList.remove("fill-white");
  lkdinIcon.classList.remove("fill-white");
  mediumIcon.classList.remove("fill-white");
  twitIcon.classList.remove("fill-white");
  menuBar.classList.add("text-aloGray");
  menuBar.classList.add("border-aloGray");
  logoNav.classList.add("fill-aloGray");
  pointButton.classList.add("fill-aloGray");
  instaIcon.classList.add("fill-aloGray");
  lkdinIcon.classList.add("fill-aloGray");
  mediumIcon.classList.add("fill-aloGray");
  twitIcon.classList.add("fill-aloGray");
}

function textWhite() {
  menuBar.classList.add("text-white");
  menuBar.classList.add("border-aloWhite");
  logoNav.classList.add("fill-white");
  pointButton.classList.add("fill-white");
  instaIcon.classList.add("fill-white");
  lkdinIcon.classList.add("fill-white");
  mediumIcon.classList.add("fill-white");
  twitIcon.classList.add("fill-white");
  menuBar.classList.remove("text-aloGray");
  menuBar.classList.remove("border-aloGray");
  logoNav.classList.remove("fill-aloGray");
  pointButton.classList.remove("fill-aloGray");
  instaIcon.classList.remove("fill-aloGray");
  lkdinIcon.classList.remove("fill-aloGray");
  mediumIcon.classList.remove("fill-aloGray");
  twitIcon.classList.remove("fill-aloGray");
}

window.addEventListener("scroll", function (e) {
  if (window.innerWidth < 1024) {
    
    let menuResponsive = document.getElementById("responsiveNav");

    if (!menuResponsive.classList.contains("hidden")) {
      colorGray();
      textWhite();
    }else if (window.scrollY >= posicionFinal.y) {
      colorGray();
      textWhite();
    }else if (window.scrollY >= posicionOurPassions.y) {
      colorWhite();
      textGray();
    }else if (window.scrollY >= posicionWeDo.y) {
      colorGreen();
      textGray();
    }else if (window.scrollY >= posicionWeAre.y) {
      colorBrown();
      textGray();
    }else{
      colorWhite();
      textGray();
    }
  } else if (window.innerWidth >= 1024) {
    if (window.scrollX >= posicionFinal.x) {
      colorGray();
      textWhite();
    }else if (window.scrollX >= posicionOurPassions.x) {
      colorWhite();
      textGray();
    }else if (window.scrollX >= posicionWeDo.x) {
      colorGreen();
      textGray();
    }else if (window.scrollX >= posicionWeAre.x) {
      colorBrown();
      textGray();
    }else{
      colorWhite();
      textGray();
    }
  }
});

if (window.innerWidth >= 1024) {
  var item = document.getElementById("MAIN");

  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      item.scrollBy({
        top: 0,
        left: 100,
        behaviour: "smooth",
      });
    } else {
      item.scrollBy({
        top: 0,
        left: -100,
        behaviour: "smooth",
      });
    }
  });
}

var showMenu = false
function showHideNav() {
  let responsiveNav = document.getElementById("responsiveNav");
  let footNav = document.getElementById("footer-nav");
  let logoNav = document.getElementById("logoNav");
  let pointButton = document.getElementById("pointButton");
  const hiddenNav = responsiveNav.classList.contains("hidden");
  if (hiddenNav) {
    responsiveNav.classList.remove("hidden");
    footNav.classList.add("bg-aloGray");
    footNav.classList.add("border-aloWhite");
    footNav.classList.remove("bg-aloWhite");
    footNav.classList.remove("bg-aloGreen");
    footNav.classList.remove("border-aloGray");
    logoNav.classList.add("fill-white");
    logoNav.classList.remove("fill-aloGray");
    pointButton.classList.add("fill-white");
    pointButton.classList.remove("fill-aloGray");
    showMenu = true
  } else {
    responsiveNav.classList.add("hidden");
    footNav.classList.remove("bg-aloGray");
    footNav.classList.remove("border-aloWhite");
    footNav.classList.add("bg-aloWhite");
    footNav.classList.add("border-aloGray");
    logoNav.classList.add("fill-aloGray");
    logoNav.classList.remove("fill-white");
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
      const logoNav = this.document.getElementById("logoNav");
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
        navbar.classList.add("bg-aloWhite");
      } else {
        navbar.classList.remove("bg-aloWhite");
      }
      if (weconnect <= 650) {
        navbar.classList.add("bg-aloGray");
        navbar.classList.add("border-aloWhite");
        pointButton.classList.add("fill-white");
        logoNav.classList.add("fill-white");
      } else {
        navbar.classList.remove("bg-aloGray");
        navbar.classList.remove("border-aloWhite");
        pointButton.classList.remove("fill-white");
        logoNav.classList.remove("fill-white")
      }
    }
  });
}

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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

// Obtener todos los elementos con la clase "scroll-trigger"
const scrollTriggers = document.querySelectorAll(".scroll-trigger");
// Agregar un evento de clic a cada elemento "span"
scrollTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    // Obtener el ID del div al que se debe desplazar
    const targetID = trigger.dataset.target;
    const targetElement = document.getElementById(targetID);

    const targetPosition = obtenerPosicion(targetElement);
    gsap.to(window, {
      scrollTo: targetPosition,
      duration: 1, // Duración de la animación en segundos
      ease: "power2.inOut", // Curva de animación, puedes ajustarla según tus preferencias
    });
  });
});