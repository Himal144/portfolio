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
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        easing: 'linear',
        updateURL: false, // Prevent URL update
        offset: 0, // Adjust as needed
        clip: true, // Clip animation to scrollable element boundaries
        exclude: [], // Elements to exclude from smooth scroll
        header: null, // Fixed header selector if present
        topOnEmptyHash: true // Scroll to the top when the hash is empty
    });

    document.querySelectorAll('.contact-button').forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            scroll.animateScroll(document.querySelector('#contact-footer'));
        });
    });


    // Function to toggle visibility of certificates
    const certificates = document.querySelectorAll('.certificate');
    const seeMoreCertificatesButton = document.getElementById('see-more-certificate-button');
    
    let seeMoreVisibleCount = 2; // Initially show the first 2 certificates
    function toggleCertificates() {
        for (let i = 0; i < certificates.length; i++) {
            if (i < seeMoreVisibleCount) {
                certificates[i].style.display = 'block';
            } else {
                certificates[i].style.display = 'none';
            }
        }

        // Toggle button text based on visibility
        if (seeMoreVisibleCount >= certificates.length) {
            seeMoreCertificatesButton.style.display = 'none'; // Hide button if all certificates are shown
        } else {
            seeMoreCertificatesButton.style.display = 'block';
        }
    }

    // Initial setup
    toggleCertificates();

    // Click event for "See More" button
    seeMoreCertificatesButton.addEventListener('click', function() {
        seeMoreVisibleCount += 2; // Show the next 2 certificates
        toggleCertificates();
    });



    // Function to toggle the works section
    const works=document.querySelectorAll(".works-container");
    const seeMoreWorksButton=document.querySelector("#see-more-works-button");
    let seeMoreWorksVisibleCount=2;
    
    function toggleWorks(){
        for (let i = 0; i < works.length; i++) {
            if (i < seeMoreWorksVisibleCount) {
                works[i].style.display = 'block';
            } else {
                works[i].style.display = 'none';
            }

    }

    if (seeMoreWorksVisibleCount >= works.length) {
        seeMoreWorksButton.style.display = 'none'; // Hide button if all certificates are shown
    } else {
        seeMoreWorksButton.style.display = 'block';
        }}


// Initial setup
toggleWorks();

// Click event for "See More" button
seeMoreWorksButton.addEventListener('click', function() {
    seeMoreWorksVisibleCount += 2; // Show the next 2 certificates
    toggleWorks();
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