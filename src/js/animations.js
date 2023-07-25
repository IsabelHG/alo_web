let isHorizontalScrollEnabled = true;

window.addEventListener('scroll', function () {
  let animation = document.querySelectorAll(".paused");
  let screenWidth = window.innerWidth;

  animation.forEach(elm => {
    let position = elm.getBoundingClientRect().right;
    let isVisible = position < screenWidth && position > screenWidth - elm.offsetWidth;
    if (isVisible) {
      elm.classList.add("overflow-y-auto")
      isHorizontalScrollEnabled = false;
    } else {
      isHorizontalScrollEnabled = true;
    }
  });
});

const enableScrollButton = document.getElementById("enableScrollButton");
enableScrollButton.addEventListener("click", function () {

  isHorizontalScrollEnabled = true;
});

const targetDiv = document.getElementById("targetDiv");

enableScrollButton.addEventListener("click", function () {
  targetDiv.scrollIntoView({ behavior: "smooth" });
});



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

  console.log(marquee.getAttribute('direction'));
}
window.addEventListener('resize', cambiarDireccion); // Llama a la función cuando cambia el tamaño de la ventana
cambiarDireccion(); // Llama a la función al cargar la página para establecer la dirección inicial