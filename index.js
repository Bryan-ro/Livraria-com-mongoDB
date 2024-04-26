const toggleButton = document.getElementById("toggleTheme");

const menuLink = document.querySelectorAll(".nav-link");

function toggleTheme() {
    const root = document.documentElement;

    const currentTheme = root.getAttribute('data-theme');

    const newTheme = currentTheme === "ligth" ? "dark" : "ligth";

    root.setAttribute('data-theme', newTheme);

    toggleButton.classList.toggle("bi-moon-stars");
    toggleButton.classList.toggle("bi-sun");
}



toggleButton.addEventListener("click", toggleTheme);

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", () => {
        menuLink.forEach(link => {
            link.classList.remove("active");
        });

        menuLink[i].classList.add("active");

        const nextIndex = (i + 4) % menuLink.length;

        menuLink[nextIndex].classList.add("active");

    });
}
