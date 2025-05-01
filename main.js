function toggleClose() {
    const menu = document.querySelector(".mobile-nav");
    menu.classList.remove("active");
    menu.classList.add("active-nav");
}
function toggleMenu() {
    const menu = document.querySelector('.mobile-nav');
    menu.classList.remove("active-nav");
    menu.classList.add("active");
}
function tryProduct() {
    alert("Redirecting to product trial page...");
}
function watchDemo() {
    alert("Playing demo video...");
}

  const text = "Industrial Safety with AI";
  const typingTextElement = document.getElementById("typing-text");
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingTextElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100); // Adjust speed here
    }
  }

  // Start the typing effect when the page loads
  window.onload = () => {
    typeEffect();
  };
  
  const frameCount = 60; // update this to match your actual number of frames
  const frameRate = 50; // milliseconds per frame (~20fps)

  const imageElement = document.getElementById("hero-animation");

  let currentFrame = 0;

  function pad(n) {
    return n.toString().padStart(3, '0'); // 000, 001, ...
  }

  // Optional: preload frames
  const frames = [];
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = `animation/LandingAnim${pad(i)}.webp`;
    frames.push(img);
  }

  // Update the image every frameRate milliseconds
  function updateFrame() {
    imageElement.src = frames[currentFrame].src;
    currentFrame = (currentFrame + 1) % frameCount; // loop
  }

  setInterval(updateFrame, frameRate);
  