// ===== Step 12-14: JavaScript interaction =====

const greetBtn = document.getElementById("greetBtn");
const nameInput = document.getElementById("visitorName");
const greetResult = document.getElementById("greetResult");

function showGreeting() {
  const visitorName = nameInput.value.trim();
  let message;

  if (visitorName === "") {
    message = `Hey there, stranger! Type your name so I can greet you properly.`;
  } else {
    const hour = new Date().getHours();
    const timeOfDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
    message = `Good ${timeOfDay}, ${visitorName}! Thanks for checking out my page.`;
  }

  greetResult.textContent = message;
  greetResult.classList.remove("d-none");
  greetResult.classList.add("show-result");
}

greetBtn.addEventListener("click", showGreeting);

nameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    showGreeting();
  }
});