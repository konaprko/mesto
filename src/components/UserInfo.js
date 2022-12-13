export default class UserInfo {
    constructor({ name, job, avatar }) {
        this._nameProfile = document.querySelector(name);
        this._jobProfile = document.querySelector(job);
        this._avatarProfile = document.querySelector(avatar);

    }

    getUserInfo() {
        const userInformation = {
            inputName: this._nameProfile.textContent,
            inputJob: this._jobProfile.textContent,
            avatar: this._avatarProfile.src,
        }
        return userInformation
    }

    setUserInfo(data) {
        this._nameProfile.textContent = data.name;
        this._jobProfile.textContent = data.about;
        this._avatarProfile.src = data.avatar;
    }
}
