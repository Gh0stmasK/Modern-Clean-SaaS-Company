document.getElementById('mobile-menu-icon').onclick = function () {
    // document.querySelector('header').style.backgroundColor = '#ffffff';
    // document.querySelector('.navmenu-items').style.display = 'flex';

    var x = document.getElementById('navmitems');
    if (x.style.display === 'none') {
        x.style.display = 'flex';
        document.querySelector('header').style.backgroundColor = '#ffffff';
    } else {
        x.style.display = 'none';
        document.querySelector('header').style.backgroundColor = 'transparent';
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