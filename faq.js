window.addEventListener("scroll", function() {
    var button = document.querySelector(".back-to-top");
    if (button) {
        if (window.pageYOffset > 100) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }
});

