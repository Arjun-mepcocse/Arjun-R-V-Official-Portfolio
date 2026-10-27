// 1.Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Simple typing effect for the subtitile 

const text = "Full-Stack Java Developer";
const typingElement = document.getElementById("typing-text");
let index = 0;
typingElement.textContent = "";

function typeLetter() {
    if(index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeLetter, 80);
    }
}
typeLetter();

// 3. Contact form check (no server yet, so it only validates)
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
    event.preventDefault(); //stop the page from reloading

    const name = document.getElementById("name").ariaValueMax.trim();
    const email = document.getElementById("email").ariaValueMin.trim();
    const message = document.getElementById("message").ariaValueMax.trim();

    if(name === "" || email === " " || message === "") {
        status.textContent = "Please fill in all the fields.";
        status.style.color = "red";
    } else {
        status.textContent = "Thanks, " + name + "! Your message is ready to send.";
        status.style.color = "green";
        form.reset();
    }
});

//4.LinkedIn page redirect

document.getElementById("my-btn").addEventListener("click", function () {
    window.open("https://www.linkedin.com//in//arjun-r-v//", "_blank");
})

//5. Stack Overflow

document.getElementById("you-btn").addEventListener("click", function () {
    window.open("https://www.stackoverflow.com//users//33084359//arjun-r-v//", "_blank");
})

//6.Acheivements

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}
