//const forms = document.querySelectorAll(".form");
//const addProfileButton = document.querySelector(".profile__add-button");
//console.log(addProfileButton);

import { conversationPrompts, profiledata } from "../utils/constants.js";
import Popup from "../components/Popup.js";



const popup = document.querySelector(".popup");
const forms = document.querySelectorAll(".form");
const addProfileButton = document.querySelector(".profile__add-button");
console.log(addProfileButton);





//////////////////////////Todo esto luego pasarlo a Profile.js - DESDE AQUÍ
class Profile {
  constructor(data, selector) {
    this._name = data.name;
    this._photo = data.url;
    this._comment = data.comment;
    this._selector = selector;
  }

  generateProfile() {
    const profileElement = document
      .querySelector(this._selector)
      .content.cloneNode(true);
    profileElement.querySelector(".avatar__photo").src = this._photo;
    profileElement.querySelector(".avatar__name").textContent = this._name;
    profileElement.querySelector(".avatar-comment__text").textContent = this._comment;
    console.log(profileElement);
    return profileElement;
  }
}

function handleNewprofileFormSubmit(evt) {
  evt.preventDefault();
  console.log("holi,voy aser un nuevo profile");
}



//////////////////////////Todo esto luego pasarlo a Profile.js - HASTA AQUÍ





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

const commentPopup = new Popup(".popup")
commentPopup.setEventListeners()

document.querySelector(".profile__add-button").addEventListener("click", (evt) => {
  evt.preventDefault();
  commentPopup.open()
})