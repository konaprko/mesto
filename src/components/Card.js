export default class Card {
    constructor({ data, userId, handleAddLike, handleRemoveLike, handleDeleteCard }, templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._likes = data.likes;
        this._cardId = data._id;
        this._cardOwnerId = data.owner._id;
        this._userId = userId;
        this._handleAddLike = handleAddLike;
        this._handleRemoveLike = handleRemoveLike;
        this._handleDeleteCard = handleDeleteCard;

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
        this.likeCounter = this._element.querySelector(".elements__counter");
        this.likeCounter.textContent = this._likes.length;
        this._deleteButton = this._element.querySelector('.elements__button-remove');
        this._haveLike();
        this._haveDeleteButton();
        this._setEventListeners();

        return this._element;
    }

    //Метод удаления карточки (Проектная 9)
    deleteCard() {
        this._element.remove();
        this._element = null;
    }


    //Метод установки слушателей (Проектная 7)
    _setEventListeners() {
        this._cardImageFullScreenButton.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });

        this._cardDeleteButton.addEventListener('click', () => {
            this._handleDeleteCard(this._cardId);
        });

        this._cardLikeButton.addEventListener('click', () => {
            if (this._cardLikeButton.classList.contains('elements__button_active')) {
                this._handleRemoveLike(this._cardId);
            } else {
                this._handleAddLike(this._cardId);
            }
        });

    }

    //Метод отображения кнопкиудаления у своей карточки (Проектная 9)
    _haveDeleteButton() {
        if (this._userId !== this._cardOwnerId) {
            this._deleteButton.remove();
        }
    }

    //Метод проверки лайка отпользователя (Проектная 9)
    _haveLike() {
        if (this._likes.some((user) => {
            return this._userId === user._id;
        })) {
            this._cardLikeButton.classList.add('elements__button_active');
        }
    }

    //Метод лайка (Проектная 9)
    handleLikeCard(data) {
        this._likes = data.likes;
        this.likeCounter.textContent = this._likes.length;
        this._cardLikeButton.classList.toggle('elements__button_active');
    }
}


