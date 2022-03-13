export default class UserInfo {
  constructor(userNameSelector, userInfoSelector, userAvatarSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userInfo = document.querySelector(userInfoSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {  
    const data = {};
    data.name = this._userName.textContent;
    data.profession = this._userInfo.textContent;  
    return data;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.about;
  }

  setAvatar(avatar) {
    this._userAvatar.src = avatar;
  }
}