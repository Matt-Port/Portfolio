window.addEventListener('scroll', function() { 
    const movingDiv = document.getElementById('movingDiv'); 
    const scrollPosition = window.scrollY; // Get vertical scroll position 
 
    // Move the div based on scroll position 
    movingDiv.style.transform = `translateY(${scrollPosition}vh)`; 
}); 