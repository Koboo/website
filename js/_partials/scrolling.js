(() => {
    let fixedHeaderSelector = '.top-nav-header';
    smoothScroll.init({ // https://github.com/cferdinandi/smooth-scroll
        selector: 'a[href^="#"]', // Selector for links (must be a class, ID, data attribute, or element tag)
        selectorHeader: fixedHeaderSelector, // Selector for fixed headers [optional]
        speed: 250, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        offset: 24, // Integer. How far to offset the scrolling anchor location in pixels
        callback: function (anchor, toggle) {
            // Function to run after scrolling
        }
    });
    try {
        gumshoe.init({ // https://github.com/cferdinandi/gumshoe (scrollspy)
            selector: '#spy-nav ul a', // Default link selector
            selectorHeader: fixedHeaderSelector, // Fixed header selector
            container: window, // The element to spy on scrolling in (must be a valid DOM Node)
            offset: 128, // Distance in pixels to offset calculations
            activeClass: 'active', // Class to apply to active navigation link and its parent list item
            scrollDelay: false, // Wait until scrolling has stopped before updating the navigation
            callback: function (nav) {
                try {
                    document.querySelector(".right-menu .active").scrollIntoView({block: "start"});
                    window.history.replaceState({}, "", location.pathname + "#" + nav.target.id);
                    document.dispatchEvent(new CustomEvent("menu-scroll-enter", {detail: nav}));
                } catch (e) { /* Doesn't matter */
                }
            }
        });
    } catch (e) {
        console.error("Failed to initialize gumshoe");
    }
})();
