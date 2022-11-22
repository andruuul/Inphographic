export default class Popup {

  constructor ({ popupSelector, handleSubmit }) {
    this._popupSelector = popupSelector;
    this._handleSubmit = handleSubmit;
    this._popup = document.querySelector(this._popupSelector);
    this._form = this._popup.querySelector(".form")
    this._overlay = document.querySelector(".overlay");
    this._inputs = this._popup.querySelectorAll(".form__input");
  }
  
  open() {
    this._popup.classList.remove("popup_hidden");
    this._overlay.style.display = "block";
    document.addEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  close() {
    this._popup.classList.add("popup_hidden");
    this._overlay.style.display = "none";
    document.removeEventListener("keydown", this._handleEscClose);
  }

  
  setEventListeners() {
    this._overlay.addEventListener("click", () => {this.close()})
    this._popup.querySelector(".form__button").addEventListener("click", (evt) => {
        evt.preventDefault();
        this._handleSubmit(this._getInputValues())
        this.close()})
  }

  _getInputValues(){ 
    const inputValues = {};
    this._inputs.forEach(input => {
        inputValues[input.name] = input.value;
    });   
    return inputValues
  }
} 

  