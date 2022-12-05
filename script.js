// JS task, do get request

function fetchData() {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            const sorted_array = data
                .map(function (user) {
                    if (user.price < 5) {
                        return `NAME: ${user.name}`;
                    }
                })
                .join(" ");
                console.log()
            document.querySelector("#quote2__name").replaceWith(sorted_array);

            const price_array = data
                .map(function (user) {
                    if (user.price < 5) {
                        return `${user.price}`;
                    }
                })
                .join(" ");
            document.querySelector("#quote2__price").replaceWith(price_array);
        })
        .catch(error => {
            console.log(error)
        })
}
fetchData();

// Slides
let slideIndex = 1;
let left_arrow = document.getElementById('left__arrow');
let right_arrow = document.getElementById('right__arrow');
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    let x = document.getElementsByClassName("prev");
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    if (slideIndex == 1) {
        left_arrow.style.display = 'none';
        right_arrow.style.display = 'block'
    } else if (slideIndex == 2) {
        left_arrow.style.display = 'block';
    } else if (slideIndex == 3) {
        left_arrow.style.display = 'block';
    }

    if (slideIndex == 3) {
        right_arrow.style.display = 'none';
    } else if (slideIndex == 2) {
        right_arrow.style.display = 'block'
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// Mobile navigation bar
function mobileNav() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}