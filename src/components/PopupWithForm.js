import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmit }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
  }

  // метод который собирает данные всех полей формы
  _getInputVaiues() {
    // создаём пустой объект
    this._formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    // возвращаем объект значений
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // добавим вызов функции _handleSubmit
      // передадим ей объект — результат работы _getInputValues
      this._handleSubmit(this._getInputVaiues());
      this.close();
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
