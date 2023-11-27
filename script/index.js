const containerDiv = document.querySelectorAll(".container div");
const targetDiv = document.querySelector(".backdrop");
const header = document.querySelector("header");
header.style.marginLeft = "5rem";
let isPT = true;
function toggleLanguage() {
  let button = document.querySelector(".languageButton");
  if (isPT) {
    button.textContent = "portugues/pt-br";
    document.querySelector(".infos h1").textContent = "Mais sobre mim";
    document.querySelector(".infos h2").textContent = "Desenvolvedor Front-end";
    document.querySelector(".blocks h1").textContent = "Experiência";
    document.querySelector(".infos h3").textContent =
      " Profissional dedicado e versátil, atuo auxiliando na área web com front-end e marketing sempre com ênfase em me adaptar e apoiar de forma estratégica qualquer demanda. Atualmente curso um bacharelado em Engenharia de Software e tenho como aptidão a minha comunicação pela experiência em trabalhar com o público";
    document.querySelector(".education_text").textContent = "Educação";
    document.querySelector(".obaexperience .function").textContent =
      "Assistente de Ecommerce";
    document.querySelector(".kostexperience .function").textContent =
      "Aux. e aprendiz de Desenvolvimento Web & Marketing";
    document.querySelector(".techexperience .function").textContent =
      "Assistente Tecnico - freelancer";
    document.querySelector(".anhanguera .function").textContent =
      "Bacharelado Engenharia de Software";
    document.querySelector(".adatech .function").textContent =
      "Desenvolvimento Back-end";
    document.querySelector(".microcamp .function").textContent =
      "Gestão e Administração de T.I";
    document.querySelector(".container .cipher a").textContent = "O Cifrador";
    document.querySelector(".container .cipher p").textContent =
      "Interface Web para Cifra de Cesar";
    isPT = false;
  } else {
    button.textContent = "english/en-us";
    document.querySelector(".infos h1").textContent = "More About me";
    document.querySelector(".blocks h1").textContent = "Experience";
    document.querySelector(".infos h2").textContent = "Front-end Development";
    document.querySelector(".infos h3").textContent =
      " Dedicated and versatile professional with a proven track on assist in marketing stategy datalysis, result assessement and Front-end technologys like HTML, CSS, JavaScript React.js and TypeScript. A strategic thinker with a passion for leveraging technology to enhance any project efforts and drive business growth. I currently have a bachelor's degree in Software Engineering and got some skills in communication by working with people.";
    document.querySelector(".education_text").textContent = "Education";
    document.querySelector(".obaexperience .function").textContent =
      "E-commerce Assistant";
    document.querySelector(".kostexperience .function").textContent =
      "Assistant and Student of Web Development & Marketing";
    document.querySelector(".techexperience .function").textContent =
      "Technical Assistant - freelance";
    document.querySelector(".anhanguera .function").textContent =
      "Software Engineering Bachelor's";
    document.querySelector(".adatech .function").textContent =
      "Back-End Development";
    document.querySelector(".microcamp .function").textContent =
      "I.T Administration and Management";
    document.querySelector(".container .cipher a").textContent = "The Cipher";
    document.querySelector(".container .cipher p").textContent =
      "A Web interface for Julius Cesar Cipher";
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
    targetDiv.style.display = "none";
  });
}
