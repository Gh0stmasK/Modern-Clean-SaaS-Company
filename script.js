const parentElement = document.getElementById('navigation');
const removeMenuItem = document.getElementById('navmitems');
const mButton = document.getElementById('mobile-menu-icon');
const mediaQuery = window.matchMedia('(max-width: 799px)');

function handleMediaQueryChange(e) {
    if (e.matches) {
        if (removeMenuItem && removeMenuItem.parentNode) {
            removeMenuItem.remove();
            parentElement.appendChild(mButton);
            console.log('Element removed.');
        }
    } else {
        parentElement.appendChild(removeMenuItem);
        parentElement.appendChild(elementToRemove2);
        mButton.remove();
        console.log('Element not removed (or re-added if logic for that exists).');
    }
}

// Initial check when the page loads
handleMediaQueryChange(mediaQuery);

// Listen for changes in the media query
mediaQuery.addListener(handleMediaQueryChange);