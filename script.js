document.getElementById("goToContact").addEventListener("click", function (event) {
    event.preventDefault();
    const contactSection = document.getElementById("contact-heading");
    const offset = 50; // Başlangıç yüksekliği
    const targetPosition = contactSection.offsetTop - offset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
});

document.getElementById("goToContact2").addEventListener("click", function (event) {
    event.preventDefault();
    const contactSection = document.getElementById("contact-heading");
    const offset = 50; // Başlangıç yüksekliği
    const targetPosition = contactSection.offsetTop - offset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
});

document.getElementById("goToContact3").addEventListener("click", function (event) {
    event.preventDefault();
    const contactSection = document.getElementById("contact-heading");
    const offset = 50; // Başlangıç yüksekliği
    const targetPosition = contactSection.offsetTop - offset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
});

document.getElementById("goToAbout").addEventListener("click", function (event) {
    event.preventDefault();
    const contactSection = document.getElementById("container-about");
    const offset = 50; // Başlangıç yüksekliği
    const targetPosition = contactSection.offsetTop - offset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
});


document.getElementById("goToTeam").addEventListener("click", function (event) {
    event.preventDefault();
    const contactSection = document.getElementById("container-team");
    const offset = 50; // Başlangıç yüksekliği
    const targetPosition = contactSection.offsetTop - offset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
});

document.getElementById("goToEvent").addEventListener("click", function (event) {
    event.preventDefault();
    const contactSection = document.getElementById("container-event");
    contactSection.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("goToPortfolio").addEventListener("click", function (event) {
    event.preventDefault();
    const contactSection = document.getElementById("container-portfolio");
    const offset = 50; // Başlangıç yüksekliği
    const targetPosition = contactSection.offsetTop - offset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
});