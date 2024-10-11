let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.scrollY = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offset - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.addEventListener("click", (e) => {
  console.log(e.value);
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
});

let form = document
  .getElementById("telegramForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const telegramMessage = `Name: ${name}\nEmail: ${email} \nPhone Number: ${number} \nSubject: ${subject} \nMessage: ${message}`;
    const botToken = "7906483913:AAF6DJTxZEx6znQ1o_2_JtpSz1z5JXEge5s";
    const chatId = "1898020431";

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      telegramMessage
    )}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          alert("Message sent successfully!");
        } else {
          alert("Error sending message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending message.");
      });

      e.target.reset()
  });
