const containerDiv = document.querySelectorAll(".container div");
const targetDiv = document.querySelector(".backdrop");
const header = document.querySelector("header");
const bio = document.querySelector(".infos h3");
const titulo = document.querySelector(".infos h2");
const moreabout = document.querySelector(".infos h1");
const experience = document.querySelector(".blocks h1");
const education = document.querySelector(".education_text");
const oba = document.querySelector(".obaexperience .function");
const kost = document.querySelector(".kostexperience .function");
const tech = document.querySelector(".techexperience .function");
const anhan = document.querySelector(".anhanguera .function");
const ada = document.querySelector(".adatech .function");
const micro = document.querySelector(".microcamp .function");
header.style.marginLeft = "5rem";

let isPT = true;
function toggleLanguage() {
  var button = document.querySelector(".languageButton");
  if (isPT) {
    button.textContent = "portugues/pt-br";
    moreabout.textContent = "Mais sobre mim";
    titulo.textContent = "Desenvolvedor Front-end";
    experience.textContent = "Experiência";
    bio.textContent =
      " Profissional dedicado e versátil, atuo auxiliando na área web com front-end e marketing sempre com ênfase em me adaptar e apoiar de forma estratégica qualquer demanda. Atualmente curso um bacharelado em Engenharia de Software e tenho como aptidão a minha comunicação pela experiência em trabalhar com o público";
    education.textContent = "Educação";
    oba.textContent = "Assistente de Ecommerce";
    kost.textContent = "Aux. e aprendiz de Desenvolvimento Web & Marketing";
    tech.textContent = "Assistente Tecnico - freelancer";
    anhan.textContent = "Bacharelado Engenharia de Software";
    ada.textContent = "Desenvolvimento Back-end";
    micro.textContent = "Gestão e Administração de T.I";
    isPT = false;
  } else {
    button.textContent = "english/en-us";
    moreabout.textContent = "More About me";
    experience.textContent = "Experience";
    titulo.textContent = "Front-end Development";
    bio.textContent =
      " Dedicated and versatile professional with a proven track on assist in marketing stategy datalysis, result assessement and Front-end technologys like HTML, CSS, JavaScript React.js and TypeScript. A strategic thinker with a passion for leveraging technology to enhance any project efforts and drive business growth. I currently have a bachelor's degree in Software Engineering and got some skills in communication by working with people.";
    education.textContent = "Education";
    oba.textContent = "E-commerce Assistant";
    kost.textContent = "Assistant and Student of Web Development & Marketing";
    tech.textContent = "Technical Assistant - freelance";
    anhan.textContent = "Software Engineering Bachelor's";
    ada.textContent = "Back-End Development";
    micro.textContent = "I.T Administration and Management";
    isPT = true;
  }
}
for (const div of containerDiv) {
  div.addEventListener("mouseenter", function () {
    targetDiv.style.display = "block";
    targetDiv.classList.remove("out");
  });

  div.addEventListener("mouseleave", function () {
    targetDiv.style.display = "none";
    targetDiv.classList.add("out");
    setTimeout(() => {
      targetDiv.style.display = "none";
    }, 400);
  });
}
