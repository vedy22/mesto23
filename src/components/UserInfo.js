export class UserInfo {
  constructor({ profileName, profileDesc }) {
    this._profileName = profileName;
    this._profileDesc = profileDesc;
  }

  // метод getUserInfo, который возвращает(получает) объект с данными пользователя
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      description: this._profileDesc.textContent,
    };
  }

  // метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(name, description) {
    this._profileName.textContent = name;
    this._profileDesc.textContent = description;
  }
}
