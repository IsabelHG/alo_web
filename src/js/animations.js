let isHorizontalScrollEnabled = true;

let animation1 = document.getElementsByClassName("paused")[0]
let animation2 = document.getElementsByClassName("paused")[1]
window.addEventListener('scroll', function () {
  let position1 = animation1.getBoundingClientRect();
  let position2 = animation2.getBoundingClientRect();
  let screenWidth = window.innerWidth;

  if (position1.left <= 50 && position1.right >= screenWidth) {
    animation1.classList.add("overflow-y-auto")
    console.log("entra 1")
    isHorizontalScrollEnabled = false;
  } else {
    if (this.scrollX < 4500) {
      isHorizontalScrollEnabled = true;
    }
  }

  if (position2.left <= 40 && position2.right >= screenWidth) {
    animation2.classList.add("overflow-y-auto")
    console.log("entra 2")
    isHorizontalScrollEnabled = false;
  } else {
    if (this.scrollX > 4500) {

      isHorizontalScrollEnabled = true;
    }
  }
});

const enableScrollButton = document.getElementById("enableScrollButton");
enableScrollButton.addEventListener("click", function () {
  isHorizontalScrollEnabled = true;
});

const targetDiv = document.getElementById("targetDiv");

enableScrollButton.addEventListener("click", function () {
  targetDiv.scrollIntoView({ behavior: "smooth" });
});

const enableScrollButton2 = document.getElementById("enableScrollButton2");

const targetDiv2 = document.getElementById("targetDiv2");
enableScrollButton2.addEventListener("click", function () {
  isHorizontalScrollEnabled = true;
  targetDiv2.scrollIntoView({ behavior: "smooth" });
});

const wedoDiv = document.getElementById("wedoDiv");
function scrollHome() {
  isHorizontalScrollEnabled = true;
  wedoDiv.scrollIntoView({ behavior: "smooth" });
}

function scrollHorizontally(e) {
  if (!isHorizontalScrollEnabled) {
    e.preventDefault();
    return;
  }
  e = window.event || e;
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  var scrollSpeed = 60;
  document.documentElement.scrollLeft -= (delta * scrollSpeed);
  document.body.scrollLeft -= (delta * scrollSpeed);
  e.preventDefault();
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

function cambiarDireccion() {
  var marquee = document.getElementById('myMarquee');
  if (window.outerWidth < 1024) {
    marquee.setAttribute('direction', 'left'); // Cambia la dirección a 'up' para pantallas pequeñas
  } else {
    marquee.setAttribute('direction', 'up'); // Cambia la dirección a 'left' para pantallas grandes
  }
}

cambiarDireccion(); // Llama a la función al cargar la página para establecer la dirección inicial

window.addEventListener('resize', function () {
  cambiarDireccion();
}); // Llama a la función cuando cambia el tamaño de la ventana

