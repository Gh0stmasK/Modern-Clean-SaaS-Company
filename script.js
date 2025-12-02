const parentElement = document.getElementById('navigation');
const removeMenuItem = document.getElementById('navmitems');
const mButton = document.getElementById('mobile-menu-icon');
const mediaQuery = window.matchMedia('(max-width: 799px)');

function handleMediaQueryChange(e) {
    // support both MediaQueryListEvent and direct MediaQueryList passed in
    const matches = (e && typeof e.matches === 'boolean') ? e.matches : mediaQuery.matches;

    if (!parentElement) {
        console.warn('`navigation` element not found in DOM.');
        return;
    }

    if (matches) {
        // Mobile view: remove the           full nav list and ensure mobile icon is present
        if (removeMenuItem && removeMenuItem.parentNode) {
            removeMenuItem.remove();
        }
        if (mButton && !parentElement.contains(mButton)) {
            parentElement.appendChild(mButton);
        }
        console.log('Switched to mobile layout.');
    } else {
        // Desktop view: re-add the nav list if it's missing, remove mobile icon
        if (removeMenuItem && !parentElement.contains(removeMenuItem)) {
            parentElement.appendChild(removeMenuItem);
        }
        if (mButton && parentElement.contains(mButton)) {
            mButton.remove();
        }
        console.log('Switched to desktop layout.');
    }
}

// Initial check when the page loads
handleMediaQueryChange(mediaQuery);

// Modern event listener with a fallback for older browsers
if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleMediaQueryChange);
} else if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(handleMediaQueryChange);
}