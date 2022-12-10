export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    //Метод проверки ошибки (Проектная 9)
    _haveError(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Статус ошибки: ${res.status}`);
    }

    //Метод получения данных профиля (Проектная 9)
    getInfo() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers,
        }).then((res) => this._haveError(res));
    }

    //Метод получения стартовых карточек (Проектная 9)
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers,
        }).then((res) => this._haveError(res));
    }

    //Метод редактирвоания данных профиля (Проектная 9)
    editUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.inputName,
                about: data.inputJob
            })
        }).then((res) => this._haveError(res));
    }

    //Метод создания карточки (Проектная 9)
    makeNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(data),
        }).then((res) => this._haveError(res));
    }

    //Метод лайка (Проектная 9)
    addLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers,
        }).then((res) => this._haveError(res));
    }

    //Метод удаления лайка (Проектная 9)
    removeLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => this._haveError(res));
    }

    //Метод удаления карточки (Проектная 9)
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => this._haveError(res));
    }

    //Метод редактирования аватара (Проектная 9)

    editAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        }).then((res) => this._haveError(res));
    }

}