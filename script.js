document.getElementById('mobile-menu-icon').onclick = function () {
    const menu = document.getElementById('navmitems');
    const header = document.querySelector('header');
    
    menu.classList.toggle('open');
    
    if (menu.classList.contains('open')) {
        header.style.backgroundColor = '#ffffff';
    } else {
        header.style.backgroundColor = 'transparent';
    }
}

// function Menu() {
//     var x = document.getElementById('navmitems');
//     if (x.style.display === 'none') {
//         x.style.display = 'flex';
//     } else {
//         x.style.display = 'none';
//     }
// }