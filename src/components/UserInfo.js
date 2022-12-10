export default class UserInfo {
    constructor({ name, job }) {
        this._nameProfile = document.querySelector(name);
        this._jobProfile = document.querySelector(job);
    }

    getUserInfo() {
        const userInformation = {
            inputName: this._nameProfile.textContent,
            inputJob: this._jobProfile.textContent,
        }
        return userInformation
    }

    setUserInfo(data) {
        this._nameProfile.textContent = data.name;
        this._jobProfile.textContent = data.about;
    }
}
