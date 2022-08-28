const popupFullScreenElement = document.querySelector('.popup-image');
const popupFullScreenImage = document.querySelector('.popup-image__picture');
const popupFullScreenCloseButton = document.querySelector('.popup__close-image');
const popupFullScreenName = document.querySelector('.popup-image__name');


export default class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
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
        this._element.querySelector('.elements__image').src = this._link;
        this._element.querySelector('.elements__title').textContent = this._name;
        this._cardDeleteButton = this._element.querySelector('.elements__button-remove');
        this._cardImageFullScreenButton = this._element.querySelector('.elements__image');
        this._cardLikeButton = this._element.querySelector('.elements__button');
        this._setEventListeners();
        return this._element;
    }

    //Метод открытия полноразмерного попапа (Проектная 7)
    _OpenFullScreenPopup() {
        popupFullScreenImage.src = this._link;
        popupFullScreenName.textContent = this._name;
        popupFullScreenImage.setAttribute('alt', `${this._name}`);
        popupFullScreenElement.classList.add('popup_opened');
    }

    //Метод закрытия полноразмерного попапа (Проектная 7)
    _CloseFullScreenPopup() {
        popupFullScreenImage.src = '';
        popupFullScreenElement.classList.remove('popup_opened');

    }

    //Метод удаления карточки (Проектная 7)

    _deleteCard() {
        this._element.remove();
    }

    //Метод лайка карточки (Проектная 7)

    _likeCard() {
        this._element.querySelector('.elements__button').classList.toggle('elements__button_active');
    }

    //Метод установки слушателей (Проектная 7)

    _setEventListeners() {
        this._cardImageFullScreenButton.addEventListener('click', () => {
            this._OpenFullScreenPopup();
        });

        popupFullScreenCloseButton.addEventListener('click', () => {
            this._CloseFullScreenPopup();
        });


        this._cardDeleteButton.addEventListener('click', () => {
            this._deleteCard();
        });

        this._cardLikeButton.addEventListener('click', () => {
            this._likeCard();
        });
    }
}


