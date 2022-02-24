export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn_submit",
  inactiveButtonClass: "popup__btn_submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error-visible",
};

export const editButton = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");
export const editForm = document.querySelector(".popup__form-name");
export const addCardForm = document.querySelector(".popup__form-card");
export const nameInput = editForm.querySelector(".popup__input_type_name");
export const jobInput = editForm.querySelector(
  ".popup__input_type_description"
);
export const profileName = document.querySelector(".profile__user-name");
export const profileDesc = document.querySelector(".profile__user-description");
export const elements = document.querySelector(".photo-grid__list");
