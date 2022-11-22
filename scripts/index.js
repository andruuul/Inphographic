//const forms = document.querySelectorAll(".form");
//const addProfileButton = document.querySelector(".profile__add-button");
//console.log(addProfileButton);
const popup = document.querysellector(".popup");
import { conversationPrompts } from "../utils/constants.js";

const forms = document.querySelectorAll(".form");
const addProfileButton = document.querySelector(".profile__add-button");
console.log(addProfileButton);

const profiledata = [
  {
    name: "Cristian Alegría",
    url: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    coment:
      "Necesito practica un poco el ingles, tengo toda la tarde libre el miercoles. si alguien gusta practicar conmigo aqui esta un enlace para zoom: zoom.36546565#$ASdffdsghjfg$^&",
  },
  {
    name: "Andrés Candul",
    url: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    coment:
      "Necesito practica un poco el ingles, tengo toda la tarde libre el miercoles. si alguien gusta practicar conmigo aqui esta un enlace para zoom: zoom.36546565#$ASdffdsghjfg$^&",
  },
  {
    name: "Aracely Cruz Del ángel",
    url: "https://code.s3.yandex.net/web-code/lago.jpg",
    coment:
      "hi i want to practice english! send me an email! im usually free on Mondays aracely@gmail.com",
  },
];

class Profile {
  constructor(data, selector) {
    this._name = data.name;
    this._photo = data.url;
    this._coment = data.coment;
    this._selector = selector;
  }

  generateProfile() {
    const profileElement = document
      .querySelector(this._selector)
      .content.cloneNode(true);
    profileElement.querySelector(".avatar__photo").src = this._photo;
    profileElement.querySelector(".avatar__name").textContent = this._name;
    profileElement.querySelector(".avatar-coment__text").textContent =
      this._coment;
    console.log(profileElement);
    return profileElement;
  }
}

profiledata.forEach((item) => {
  const profile = new Profile(item, ".template__profile");
  const profileElement = profile.generateProfile();

  document.querySelector(".people__profiles").append(profileElement);
});

function handleNewprofileFormSubmit(evt) {
  evt.preventDefault();
  console.log("holi,voy aser un nuevo profile");
//Prompts para conversaciones
document.querySelector(".prompt__form").addEventListener("submit", (e) => {
  e.preventDefault();
  showPrompt(document.querySelector(".prompt__form").prompt.value)
})

function showPrompt(promptNumber) {
  document.querySelector(".prompt__category").textContent = conversationPrompts[promptNumber - 1].category
  document.querySelector(".prompt__text").textContent = conversationPrompts[promptNumber - 1].text
}
