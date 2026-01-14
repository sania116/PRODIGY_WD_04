window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    nav.style.backgroundColor = window.scrollY > 50 ? "#000" : "#222";
});
