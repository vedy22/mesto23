import "../pages/index.css";

import {
  initialCards,
  config,
  editButton,
  addButton,
  nameInput,
  jobInput,
  elements,
  editForm,
  addCardForm,
  profileName,
  profileDesc,
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";

import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";

// новый экземпляр класса imageModal
const imageModal = new PopupWithImage(".popup_content_image");
imageModal.setEventListeners();

// фунцкия создания карточки
const createCard = (item) => {
  const card = new Card(item.name, item.link, ".photo__template", {
    handleCardClick: () => {
      imageModal.open(item.name, item.link);
    },
  });

  return card.renderCard();
};

//функция добавления новой секции
const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      defaultCardList.setItem(cardElement);
    },
  },
  elements
);
defaultCardList.renderItems();

//Класс UserInfo отвечает за управление отображением информации о пользователе на странице
const userInfo = new UserInfo({ profileName, profileDesc });

// попап добавления новой карточки
const addCardModal = new PopupWithForm({
  popupSelector: ".popup_content_card",
  handleSubmit: (item) => {
    defaultCardList.setItem(createCard(item));
    addCardModal.close();
  },
});

addCardModal.setEventListeners();

// попап профиля пользователя
const editProfileModal = new PopupWithForm({
  popupSelector: ".popup_content_profile",
  handleSubmit: (item) => {
    userInfo.setUserInfo(item.name, item.about);
    editProfileModal.close();
  },
});
editProfileModal.setEventListeners();

// валидация форм
const formEditProfileValidator = new FormValidator(config, editForm);
formEditProfileValidator.enableValidation();
const formAddCardValidator = new FormValidator(config, addCardForm);
formAddCardValidator.enableValidation();

// открытие попапа редактирования профиля
editButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.description;
  formEditProfileValidator.resetValidation();
  editProfileModal.open();
});

// открытие попапа добавления карточки
addButton.addEventListener("click", () => {
  formAddCardValidator.resetValidation();
  addCardModal.open();
  formAddCardValidator.toggleButtonState();
});
