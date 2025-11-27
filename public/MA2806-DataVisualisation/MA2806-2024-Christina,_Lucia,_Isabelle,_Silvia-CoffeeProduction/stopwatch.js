document.addEventListener('visibilitychange', function() {
    const video = document.getElementById('coffeeVideo');
    
    if (document.hidden) {
        // Ensure the video keeps playing even if the page is hidden
        video.play();
    }
});
