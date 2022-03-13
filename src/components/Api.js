export class Api {
  constructor({url, token}) {
    this._url = url;
    this._token = token;
  }

  _checkRes(res) {    //Проверка на наличие ошибок
    if (res.ok) {
      return res.json();
    }        
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {      //Загрузка карточек с сервера
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._checkRes(res))
  }

  getUserData() {      //Загрузка информации о пользователе с сервера
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => this._checkRes(res))
  }

  sendUserData(data) {   //отправление данных пользователя на сервер
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: '37537b48-8cd1-46df-bdda-50c6c5fa0f5b',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(res => this._checkRes(res))
  }

  sendNewCard(data) {   //отправление новой карточки
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(res => this._checkRes(res))
  }

  deleteCard(cardId) {   //удаление карточки 
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => this._checkRes(res))
  }

  likeCard(cardId) {   //поставить лайк карточке
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => this._checkRes(res))
  }

  dislikeCard(cardId) {  //снять лайк с карточки
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => this._checkRes(res))
  }  

  updateAvatar(link) {   //обновление аватара
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(res => this._checkRes(res))
  }
}