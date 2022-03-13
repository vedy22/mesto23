export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose = (evt) => {  
    if(evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {    
    this._popup.addEventListener('mousedown', (evt) => {
      if(evt.target.classList.contains('popup__close-button')
       || evt.target.classList.contains('popup_is-opened')) {
        this.close();
      }
    })
  }

  open() {
    this._popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
}