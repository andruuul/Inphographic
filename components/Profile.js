export default class Profile {
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
      profileElement.querySelector(".avatar__photo").alt = this._name;
      profileElement.querySelector(".avatar__name").textContent = this._name;
      profileElement.querySelector(".avatar-comment__text").textContent = this._comment;
      return profileElement;
    }
  }