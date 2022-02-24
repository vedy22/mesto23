class Card {
  constructor(name, link, cardSelector, { handleCardClick }) {
    this._name = name;
    this._link = link;
    this._alt = name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate(); // Запишем разметку в поле _element
    this._cardImage = this._element.querySelector(".card__image"); // картинка по селектору
    this._likeButton = this._element.querySelector(".card__btn_cliked"); // кнопка лайка по селектору
  }

  // метод _getTemplate - вернем разметку из template-элемента
  _getTemplate() {
    return document
      .querySelector(this._cardSelector) // забираем разметку из HTML и клонируем элемент
      .content.querySelector(".card")
      .cloneNode(true);
  }

  //  метод renderCard - подготовит карточку к публикации
  renderCard() {
    // Добавим данные
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;
    this._setEventListeners(); // добавляем обработчик

    // Вернём элемент наружу
    return this._element;
  }

  // метод добавления слушателя
  _setEventListeners() {
    // Удаление карточки
    // Находим селектор кнопки удаления
    // Вешаем событие клика
    // Возвращаем метод _deleteCard
    this._element
      .querySelector(".card__btn_action_del")
      .addEventListener("click", () => {
        this._deleteCardBtn();
      });

    // Лайк карточки
    // Находим селектор кнопки лайка
    // Вешаем событие клика
    // Возвращаем метод _handlelikeButton
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    // Открытие попапа карточки

    this._cardImage.addEventListener("click", () => {
      this._openPopupWithImage();
    });
  }

  // метод лайка карточки
  _handleLikeButton() {
    this._likeButton.classList.toggle("card__btn_action_like"); // при каждом нажатии меняется класс
  }
  _deleteCardBtn() {
    this._element.remove(); // удаляем элемент из DOM
    this._element = null;
  }

  _openPopupWithImage() {
    this._handleCardClick(this._name, this._link);
  }
}
export { Card };
