//const forms = document.querySelectorAll(".form");
//const addProfileButton = document.querySelector(".profile__add-button");
//console.log(addProfileButton);

import { conversationPrompts, profiledata, settings } from "../utils/constants.js";
import Popup from "../components/Popup.js";
import Profile from "../components/Profile.js";
import { FormValidator } from "../components/FormValidator.js";



const popup = document.querySelector(".popup");
const forms = document.querySelectorAll(".form");
const addProfileButton = document.querySelector(".profile__add-button");
console.log(addProfileButton);


////ESTE SE VA A QUEDAR EN INDEX.JS

profiledata.forEach((item) => {
  const profile = new Profile(item, ".template__profile");
  const profileElement = profile.generateProfile();

  document.querySelector(".people__profiles").append(profileElement);
});



//Prompts para conversaciones
document.querySelector(".prompt__form").addEventListener("submit", (e) => {
  e.preventDefault();
  showPrompt(document.querySelector(".prompt__form").prompt.value)
})

function showPrompt(promptNumber) {
  document.querySelector(".prompt__category").textContent = conversationPrompts[promptNumber - 1].category
  document.querySelector(".prompt__text").textContent = conversationPrompts[promptNumber - 1].text
}

const commentPopup = new Popup({ popupSelector:".popup", handleSubmit: (data) => {
  const newComment = new Profile(data, ".template__profile")
  const commentElement = newComment.generateProfile()

  document.querySelector(".people__profiles").append(commentElement);
  console.log(commentElement)
  
}})
commentPopup.setEventListeners()

document.querySelector(".people__addButton").addEventListener("click", (evt) => {
  evt.preventDefault();
  commentPopup.open()
})

const form = document.querySelector('.form');
form.addEventListener("change",() => {
  console.log("change")
    document.querySelector(".form__button").disabled = !form.checkValidity()
});

const formValidators = {}

//Ahora lo dejamos como un "forEach" que trabaja con un array, porque aunque solo haya un formulario ahora, nos gustaría planear a futuro y que esta validación nos sirva para los próximos formularios que creemos con el paso del tiempo.
const enableValidation = (settings) => {
  console.log(settings)
  const formList = Array.from(document.querySelectorAll(".form"))
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, settings)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
    validator.enableValidation();
    console.log(formElement)
  });
};
enableValidation(settings);