window.addEventListener('scroll', function(){
    let animation = document.querySelectorAll(".paused");
    let screenHeight = window.innerHeight/2;

    animation.forEach(elm => {
        let position = elm.getBoundingClientRect().top;
        console.log(position);
        if(position < screenHeight){
            console.log("ya");
            elm.classList.remove("paused");
        }
    })
})

if(window.innerWidth > 1023){
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        var scrollSpeed = 60;
        document.documentElement.scrollLeft -= (delta * scrollSpeed);
        document.body.scrollLeft -= (delta * scrollSpeed);
        e.preventDefault();
      }
      
      if (window.addEventListener) {
        // IE9, Chrome, Safari, Opera
        window.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
      } else {
        // IE 6/7/8
        window.attachEvent("onmousewheel", scrollHorizontally);
      }
}