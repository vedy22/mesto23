import Popup from "./Popup";

export default class PopupDeleteImage extends Popup {
  constructor(popupSelector, handleDeleteCard) {
    super(popupSelector);
    this._handleDeleteCard = handleDeleteCard;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup
      .querySelector(".popup__submit-button")
      .addEventListener("click", (evt) => {
        evt.preventDefault();
        this._handleDeleteCard(this._cardElement, this._id);
      });
  }

  open(card, id) {
    super.open();
    this._cardElement = card;
    this._id = id;
  }
}
