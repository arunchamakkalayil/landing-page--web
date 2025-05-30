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

  let currentVideoIndex = 0;
let videos;

function openModal() {
  document.getElementById('videoModal').style.display = 'block';
  videos = document.querySelectorAll('.demo-video');
  currentVideoIndex = 0;
  playVideo(currentVideoIndex);
}

function closeModal() {
  document.getElementById('videoModal').style.display = 'none';
  videos.forEach(video => {
    video.pause();
    video.currentTime = 0;
  });
}

function playVideo(index) {
  videos.forEach((video, i) => {
    video.classList.add('hidden');
    video.pause();
    if (i === index) {
      video.classList.remove('hidden');
      video.play();
    }
  });
}

function nextVideo() {
  if (!videos || videos.length === 0) return;
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  playVideo(currentVideoIndex);
}

function prevVideo() {
  if (!videos || videos.length === 0) return;
  currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
  playVideo(currentVideoIndex);
}