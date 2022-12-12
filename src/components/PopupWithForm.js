import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
        this._submitButton = this._popupForm.querySelector('.popup__button');
        this._submitButtonInitialText = this._submitButton.textContent;

    }

    // Метод получения данных из формы
    _getInputValues() {
        this._formData = {};
        this._inputList.forEach(input => {
            this._formData[input.name] = input.value;
        })
        return this._formData;
    }

    // Метод установки слушателей
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues())
        })
    }

    // Метод закрытия попапа и сброса формы 
    close() {
        super.close();
        this._popupForm.reset();
    }

    loading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...'
        } else {
            this._submitButton.textContent = this._submitButtonInitialText;
        }
    }

}