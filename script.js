document.addEventListener('DOMContentLoaded', function () {
    const toggleContent = function (event){
            event.preventDefault();
            const parentArticle = event.target.closest('article');
            const excerpt = parentArticle.querySelector('.excerpt');
            const fullContent = parentArticle.querySelector('.full-content');
            const readMoreLink = parentArticle.querySelector('.read-more');
            const hideLink = parentArticle.querySelector('.hide-content')


            // toggle visibility
            excerpt.style.display = excerpt.style.display === 'none' ?'block' : 'none';
            fullContent.style.display = fullContent.style.display === 'none' ? 'block' : 'none';

            // visibility of readMoreLink and hideLink
            readMoreLink.style.display = readMoreLink.style.display === 'none' ? 'block' : 'none';
            hideLink.style.display = hideLink.style.display === 'none' ? 'block' : 'none';
        };

        const readMoreLinks = document.querySelectorAll('.read-more');
        const hideLinks = document.querySelectorAll('.hide-content');

        readMoreLinks.forEach(function (link) {
            link.addEventListener('click', toggleContent);
        });

        hideLinks.forEach(function (link) {
            link.addEventListener('click', toggleContent);
        });
    });


    // bubbles
    document.addEventListener('DOMContentLoaded', function () {
        const bubblesContainer = document.querySelector('.bubbles-container');
    
        // Function to create a bubble element
        const createBubble = () => {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
    
            const size = Math.random() * 30 + 10; // Random size between 10 and 40 pixels
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
    
            const top = Math.random() * 100 + 1; // Random top position between 1% and 100%
            const left = Math.random() * 100 + 1; // Random left position between 1% and 100%
            bubble.style.top = `${top}%`;
            bubble.style.left = `${left}%`;
    
            const animationDuration = Math.random() * 6 + 5; // Random animation duration between 5s and 10s
            bubble.style.animation = `float ${animationDuration}s linear infinite`;
    
            bubblesContainer.appendChild(bubble);
        };


        const hideLoadingOverlay = () => {
            const loadingOverlay = document.querySelector('.loading-overlay');
            loadingOverlay.style.display = 'none';
        };
    
    
        // Create bubbles dynamically
        const numberOfBubbles = 20; // Adjust the number of bubbles as needed
        for (let i = 0; i < numberOfBubbles; i++) {
            createBubble();
        }
        // Hide loading overlay when the content is loaded (you can call this when your content is ready)
    hideLoadingOverlay();
    });