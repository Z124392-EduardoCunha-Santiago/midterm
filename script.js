document.addEventListener("DOMContentLoaded", function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            const links = document.querySelectorAll('.tab');
            const current = window.location.pathname.split("/").pop();

            links.forEach(link => {
                if (link.getAttribute('href') === current) {
                    link.classList.add('active');
                }
            });

            const toggle = document.getElementById("menu-toggle");
            const tabs = document.getElementById("tabs");

            if (toggle && tabs) {
                toggle.addEventListener("click", () => {
                    tabs.classList.toggle("show");
                });
            }
        });

    const emailModal = document.getElementById("emailModal");
    const emailBtn = document.getElementById("emailBtn");
    const emailClose = document.querySelector(".modal .close");

    if (emailBtn && emailModal && emailClose) {
        emailBtn.addEventListener("click", function () {
            emailModal.style.display = "block";
        });

        emailClose.addEventListener("click", function () {
            emailModal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === emailModal) {
                emailModal.style.display = "none";
            }
        });
    }

    const certModal = document.getElementById("certificateModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const certClose = certModal ? certModal.querySelector(".close") : null;

    const descriptions = {
        "Excel Professional - How to Create Smart Spreadsheets":
        "Duration: 40 hours. Introduction to spreadsheet creation, databases, VLOOKUP and XLOOKUP in Excel.",

        "Mathematical and Computational Foundations for Data Science": "Duration: 40 hours. Building and analyzing charts and tables, introduction to Pandas Series, NumPy, and Matplotlib.",

        "Cybersecurity Essentials": "Describe the tactics, techniques, and procedures used by cybercriminals. Describe the principles of confidentiality, integrity, and availability as they relate to data states and cybersecurity countermeasures. Describe the technologies, products, and procedures used to protect confidentiality, ensure integrity, and provide high availability. Explain how cybersecurity professionals use technologies, processes, and procedures to defend all components of the network. Explain the purpose of laws related to cybersecurity.",

        "Mobile App Development using Android Studio": "Duration: 40 hours. Built native Android apps using Java/Kotlin and Android Studio.",

        "Adobe InDesign - Graphic Design for Physical and Digital Media": "Duration: 40 hours. Introduction to the tool, creating magazines and resumes using InDesign.",

        "AWS Academy Cloud Foundations": "AWS Academy Cloud Foundations is aimed at students who seek a general understanding of cloud computing concepts, regardless of specific technical roles. The course provides a detailed overview of cloud concepts, key AWS services, security, architecture, pricing definitions, and support.",

        "Low Poly Environment Modeling for Games": "This refers to the process of creating game environments using a minimalistic polygonal style, commonly used in game design for optimizing performance, especially in mobile and indie games."
    };

    document.querySelectorAll(".certificate").forEach(section => {
        section.addEventListener("click", () => {
            const title = section.querySelector("h2").textContent;
            const imgSrc = section.querySelector("img").getAttribute("src");

            modalTitle.textContent = title;
            modalImage.setAttribute("src", imgSrc);
            modalDescription.textContent = descriptions[title] || "Description coming soon.";

            certModal.style.display = "block";
        });
    });

    if (certClose) {
        certClose.addEventListener("click", () => {
            certModal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === certModal) {
                certModal.style.display = "none";
            }
        });
    }
});