export default class FormValidator {
  constructor(validationClasses, formElement) {
    this._formElement = formElement;
    this._inputSelector = validationClasses.inputSelector;
    this._submitButtonSelector = validationClasses.submitButtonSelector;
    this._inactiveButtonClass = validationClasses.inactiveButtonClass;
    this._inputErrorClass = validationClasses.inputErrorClass;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonSubmit = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(buttonSubmit, inputList);

    this._formElement.addEventListener('reset', () => {
      this._disableButton( buttonSubmit);
      inputList.forEach((inputElement) => {
        this._hideInputError(inputElement)
      })
    });
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(buttonSubmit, inputList);
      })
    });
  }

  _hasInvalidInput(inputList, inputElement) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _disableButton(buttonElement) {    
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.setAttribute("disabled", "disabled");
  }

  _toggleButtonState(buttonElement, inputList) {
    if(this._hasInvalidInput(inputList)) {
      this._disableButton(buttonElement);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
    }
  }
  
  enableValidation() {
    this._setEventListeners()
  }
}