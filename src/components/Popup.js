export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeButton = this._popup.querySelector('.popup__close');
        this._escapeClose = this._closeByEsc.bind(this);
    }


    //Метод открытия попапа
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._escapeClose);
    }

    //Метод закрытия попапа
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._escapeClose);
    }


    //Метод закрытия попапа по ESC
    _closeByEsc(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    //Метод установки слушателя
    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.close();
        });
        this._popup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup')) {
                this.close();
            }
        });
    }
}
