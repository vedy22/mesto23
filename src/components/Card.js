export default class Card {
  constructor(userData, cardData, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick, handleDislikeClick) {
    this._templateSelector = templateSelector;
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._handleCardClick = handleCardClick;
    this._ownerId = cardData.owner._id;
    this._cardId = cardData._id;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDislikeClick = handleDislikeClick;
    this._userId = userData._id;    
  }

  _getTemplate() {
    const cardElement = document.getElementById(this._templateSelector).content.firstElementChild.cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {this._handleLikeClick(this._cardId)});

    this._removeButton.addEventListener('click', () => this._handleDeleteClick(this._element, this._cardId));

    this._cardImage.addEventListener('click', () => this._handleCardClick());
  }

  createCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.places__like-button');
    this._cardImage = this._element.querySelector('.places__image');
    this._removeButton = this._element.querySelector('.places__remove-button');
    this._likeCounter = this._element.querySelector('.places__like-counter');
    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.places__like-counter').textContent = this._likes.length
    this._element.querySelector('.places__text').textContent = this._name;
    if (this._ownerId !== this._userId) {
      this._removeButton.classList.add('places__remove-button_hidden')
    }
    
    if (this.isLiked(this._cardData)) {
      this._likeButton.classList.add('places__like-button_active');
    }

    return this._element
  }

  likeCard(card) {
    this._likeButton.classList.toggle('places__like-button_active');
    this._likeCounter.textContent = card.likes.length    
  }

  isLiked(card) {
    return card.likes.some(like => like._id === this._userId)
  }
}