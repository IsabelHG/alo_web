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

if (window.innerWidth >= 1024) {
  var item = document.getElementById("MAIN");

  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) item.scrollLeft += 100;
    else item.scrollLeft -= 100;
  });
}

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

    if (targetID === "weare") {
      const targetPosition = targetElement.offsetLeft + 450;
      gsap.to(window, {
        scrollTo: targetPosition,

        duration: 1, // Duración de la animación en segundos
        ease: "power2.inOut", // Curva de animación, puedes ajustarla según tus preferencias
      });
    } else if (targetID === "wedo") {
      const targetPosition = targetElement.offsetLeft + 250;
      gsap.to(window, {
        scrollTo: targetPosition,

        duration: 1, // Duración de la animación en segundos
        ease: "power2.inOut", // Curva de animación, puedes ajustarla según tus preferencias
      });
    } else {
      const targetPosition = targetElement.offsetLeft + 630;

      gsap.to(window, {
        scrollTo: targetPosition,
        duration: 1,
        ease: "power2.inOut",
      })
    }
  });
});