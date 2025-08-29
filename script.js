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
// call

const callButtons = document.querySelectorAll(".call-btn");

callButtons.forEach((callbtn) => {
  callbtn.addEventListener("click", function (event) {
    const clickedElement = event.target;
    console.log(clickedElement.parentNode.parentNode);
    const serviceName =
      clickedElement.parentNode.parentNode.querySelector(".service-name").innerText;
    const serviceNumber =
      clickedElement.parentNode.parentNode.querySelector("#hotline-number").innerText;

    const totalCoinElement = document.getElementById("total-coin");
    let totalCoin = parseInt(totalCoinElement.innerText);
    const time = new Date().toLocaleTimeString();

    if (totalCoin < 20) {
      alert("You don't have 20 coin");
      return;
    }
    totalCoin = totalCoin - 20;

    totalCoinElement.innerText = totalCoin;
    alert(`You're calling to ${serviceName} ${serviceNumber}`);

    const historyContainer = document.getElementById("history-container");
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="flex justify-between items-center bg-gray-50 p-4">
    <div>
    <h2 class="text-lg font-semibold">${serviceName}</h2>
    <p class="text-gray-500 text-lg">${serviceNumber}</p>
    </div>
    <p class="text-lg">${time}</p>

    </div>
    `;

    historyContainer.appendChild(card);
    historyContainer.classList.add("flex", "flex-col", "gap-4");
  });
});

