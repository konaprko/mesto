export default class UserInfo {
    constructor(nameProfile, jobProfile) {
        this._nameProfile = nameProfile;
        this._jobProfile = jobProfile;
    }

    getUserInfo() {
        const userInformation = {
            inputName: this._nameProfile.textContent,
            inputJob: this._jobProfile.textContent,
        }
        return userInformation
    }

    setUserInfo(data) {
        this._nameProfile.textContent = data.inputName;
        this._jobProfile.textContent = data.inputJob;
    }
}
