var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

// Code for the adding the class when the crouser enter the button

var buttons=document.querySelectorAll(".button")
 buttons.forEach(element => {
    element.addEventListener("mouseenter", function() {
element.classList.add("active");
});
element.addEventListener("mouseleave", function() {
element.classList.remove("active");
});
    })

//Code to scroll to the footer when contact is clicked


    // function smoothScroll(target, duration) {
    //     var targetElement = document.getElementById(target);
    //     var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    //     var startPosition = window.pageYOffset;
    //     var distance = targetPosition - startPosition;
    //     var startTime = null;

    //     function animation(currentTime) {
    //         if (startTime === null) startTime = currentTime;
    //         var timeElapsed = currentTime - startTime;
    //         var run = easeLinear(timeElapsed, startPosition, distance, duration);
    //         window.scrollTo(0, run);
    //         if (timeElapsed < duration) requestAnimationFrame(animation);
    //     }

    //     function easeLinear(t, b, c, d) {
    //         return c * t / d + b;
    //     }

    //     requestAnimationFrame(animation);
    // }
    var scroll = new SmoothScroll();

    document.querySelectorAll('.contact-button').forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            scroll.animateScroll(document.querySelector('#contact-footer'), null, {
                speed: 1000,
                easing: 'easeInOutCubic'
            });
        });
    });

//Code for the certificate
document.querySelector('#certificates-button').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('certificates-section').style.display="block";
document.getElementById('certificates-section').scrollIntoView({

behavior: 'smooth'
});
})


var typed=new Typed(".input",{
    strings:["Backend  Developer","Project Leader","DevOps Engineer"],
    typedSpeed:70,
    backSpeed:55,
    loop:true
})