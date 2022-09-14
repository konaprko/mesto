export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    //Метод получения разметки (Проектная 7)
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.elements__item')
            .cloneNode(true);

        return cardElement;
    }

    //Метод создания карточки (Проектная 7)
    generateCard() {
        this._element = this._getTemplate();
        this._cardImageFullScreenButton = this._element.querySelector('.elements__image');
        this._cardImageFullScreenButton.src = this._link;
        this._cardImageFullScreenButton.setAttribute('alt', `${this._name}`);
        this._element.querySelector('.elements__title').textContent = this._name;
        this._cardDeleteButton = this._element.querySelector('.elements__button-remove');
        this._cardLikeButton = this._element.querySelector('.elements__button');
        this._setEventListeners();
        return this._element;
    }

    //Метод удаления карточки (Проектная 7)
    _deleteCard() {
        this._element.remove();
    }

    //Метод лайка карточки (Проектная 7)
    _likeCard() {
        this._cardLikeButton.classList.toggle('elements__button_active');
    }

    //Метод установки слушателей (Проектная 7)
    _setEventListeners() {
        this._cardImageFullScreenButton.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });

        this._cardDeleteButton.addEventListener('click', () => {
            this._deleteCard();
        });

        this._cardLikeButton.addEventListener('click', () => {
            this._likeCard();
        });
    }
}


