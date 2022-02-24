import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.imageModalImg = this._popup.querySelector(".figure__image");
    this.imageModalCaption = this._popup.querySelector(".figure__caption");
  }

  open(name, link) {
    super.open();
    

    this.imageModalImg.src = link;
    this.imageModalImg.alt = name;
    this.imageModalCaption.textContent = name;
  }
}
