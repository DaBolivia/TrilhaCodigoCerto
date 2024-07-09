document.addEventListener('DOMContentLoaded', function() {
    const dynamicText = document.getElementById('dynamic-text');
    const texts = ["Pedro Thiago", "desenvolvedor Front-End"];
    let index = 0;

    setInterval(() => {
        dynamicText.style.opacity = 0; // Fade out
        setTimeout(() => {
            index = (index + 1) % texts.length;
            dynamicText.textContent = texts[index];
            dynamicText.style.opacity = 1; // 
        }, 500); // 
    }, 3000); // 
});

