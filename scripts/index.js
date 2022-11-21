import { conversationPrompts } from "../utils/constants.js";

const forms = document.querySelectorAll(".form");
const addProfileButton = document.querySelector(".profile__add-button");
console.log(addProfileButton);

const profiledata = [
  {
    name: "",
    url: "",
    place: "",
  },
];

//Prompts para conversaciones
document.querySelector(".prompt__form").addEventListener("submit", (e) => {
  e.preventDefault();
  showPrompt(document.querySelector(".prompt__form").prompt.value)
})

function showPrompt(promptNumber) {
  document.querySelector(".prompt__category").textContent = conversationPrompts[promptNumber - 1].category
  document.querySelector(".prompt__text").textContent = conversationPrompts[promptNumber - 1].text
}
