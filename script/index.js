const containerDiv = document.querySelectorAll(".container div");
const targetDiv = document.querySelector(".backdrop");

for (const div of containerDiv) {
  console.log(div);

  div.addEventListener("mouseenter", function () {
    targetDiv.style.display = "block";
    targetDiv.classList.remove("out");
  });

  div.addEventListener("mouseleave", function () {
    targetDiv.classList.add("out");
    setTimeout(() => {
      targetDiv.style.display = "none";
    }, 400);
  });
}