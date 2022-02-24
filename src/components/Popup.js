export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this.close = this.close.bind(this);
    this._setEscListener = this._setEscListener.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._setEscListener);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._setEscListener);
  }

  setEventListeners() {
    const button = this._popup.querySelector(".popup__btn_close");
    button.addEventListener("click", () => this.close());

    this._popup.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup")) this.close();
    });
  }

  // Функция закрытия по кнопке Escape
  _setEscListener = function (evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  };
}
