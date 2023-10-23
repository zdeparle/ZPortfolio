// Ensure that the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    
    let currentIndex = 0; // To keep track of the current displayed image
    
    // Array containing the URLs or paths of the images
    const images = [
      'url(./assets/teslaroadster.jpeg)',
      'url(path-to-your-image2.jpg)',
      // Add more image paths as needed
    ];
    
    // Function to change the background image
    function changeBackgroundImage() {
      const body = document.body; // or another element where you want to change the background
      body.style.backgroundImage = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length; // Cycle back to the first image when reaching the last
    }
    
    // Set the initial background image
    changeBackgroundImage();
    
    // Change the background image every 5 seconds (5000 milliseconds)
    setInterval(changeBackgroundImage, 5000);
});
