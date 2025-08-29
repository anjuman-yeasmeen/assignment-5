// heart
const heartIcons = document.querySelectorAll(".heart-icon");
heartIcons.forEach((hearticon) => {
  hearticon.addEventListener("click", function (event) {
    event.preventDefault();
    const heartCountElement = document.getElementById("heart-count");
    let heartCount = parseInt(heartCountElement.innerText);
    heartCount = heartCount + 1;
    heartCountElement.innerText = heartCount;
    const targetedElement = event.target;
    console.log(targetedElement);
    targetedElement.classList.remove("text-gray-400", "fa-regular");
    targetedElement.classList.add("text-red-400", "fa-solid");
  });
});

// copy
const copyIcons = document.querySelectorAll(".copy-btn");

copyIcons.forEach((copybtn) => {
  copybtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target);

    const copyCountElement = document.getElementById("copy-count");
    let copyCount = parseInt(copyCountElement.innerText);
    copyCount = copyCount + 1;
    copyCountElement.innerText = copyCount;
    alert("Hotline number hasbeen copied");

    const hotlineNumber =
      event.target.parentNode.parentNode.querySelector("#hotline-number").innerText;

    navigator.clipboard.writeText(hotlineNumber);
  });
});
