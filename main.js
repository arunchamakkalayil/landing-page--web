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
