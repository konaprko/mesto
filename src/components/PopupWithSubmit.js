import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
    constructor({ popupSelector }) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
    }

    // Коллбэк удаления карточки
    submitDeleteCard(remove) {
        this._handleSubmit = remove;
    }

    // Метод установки слушателей
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('click', (event) => {
            event.preventDefault();
            this._handleSubmit();
        });
    }
}
