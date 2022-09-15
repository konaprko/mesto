export default class FormValidator {
    constructor(validationConfigurator, formElement) {
        this._validationConfigurator = validationConfigurator;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfigurator.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._validationConfigurator.submitButtonSelector);
    }

    // Метод добавления класса с ошибкой (Проектная 6,7)
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._validationConfigurator.inputErrorClass);
        errorElement.classList.add(this._validationConfigurator.errorClass);
        errorElement.textContent = errorMessage;
    };

    // Метод удаления класса с ошибкой (Проектная 7)
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._validationConfigurator.inputErrorClass);
        errorElement.classList.remove(this._validationConfigurator.errorClass);
        errorElement.textContent = '';
    };

    // Метод проверки валидности поля (Проектная 7)
    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    // Метод проверки наличия невалидного поля (Проектная 7)
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    // Метод дизактивации кнопки
    disactivateButton() {
        this._buttonElement.setAttribute('disabled', 'disabled');
        this._buttonElement.classList.add(this._validationConfigurator.inactiveButtonClass);
    }

    //Метод активации кнопки
    activateButton() {
        this._buttonElement.removeAttribute('disabled');
        this._buttonElement.classList.remove(this._validationConfigurator.inactiveButtonClass);
    }


    // Метод активации/дизактивации кнопки в форме (Проектная 7)
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this.disactivateButton()
        } else {
            this.activateButton()
        }
    };

    // Метод очистки сообщений в формах при открытии попапа (Проектная 7)
    resetValidation() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });

    }

    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState();
            });
        });
    };

    // Метод валидации форм (Проектная 7)
    enableValidation() {
        this._setEventListeners();
    };
}