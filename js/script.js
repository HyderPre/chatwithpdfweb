document.addEventListener('DOMContentLoaded', function () {
    // Function to handle smooth scrolling
    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            console.error(`Element with ID '${targetId}' not found.`);
        }
    }

    // Home Button Scroll
    const homeButton = document.getElementById('home-button');
    if (homeButton) {
        homeButton.addEventListener('click', function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // AI Models Navbar Link Smooth Scroll
    const aiModelsLink = document.querySelector('a[href="#ai-models-section"]');
    if (aiModelsLink) {
        aiModelsLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default jump behavior
            smoothScroll('ai-models-section');
        });
    } else {
        console.error("AI Models link not found in DOM.");
    }

    // Pricing Navbar Link Smooth Scroll
    const pricingLink = document.querySelector('a[href="#pricing-section"]');
    if (pricingLink) {
        pricingLink.addEventListener('click', function (event) {
            event.preventDefault();
            smoothScroll('pricing-section');
        });
    } else {
        console.error("Pricing link not found in DOM.");
    }
});
