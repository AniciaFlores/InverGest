document.getElementById('menu-toggle').addEventListener('click', function () {
    let menu = document.getElementById('menu');
    let iconHamburger = document.getElementById('icon-hamburger');

    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        iconHamburger.style.display = 'none';
       
    } else {
        menu.style.display = 'none';
        iconHamburger.style.display = 'block';
    }
});
