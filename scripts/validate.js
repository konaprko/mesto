// Переменная классов  (Проектная 6)
const configurationOfClasses =
{
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};


// Функция добавления класса с ошибкой (Проектная 6)
function showInputError(formElement, inputElement, errorMessage, configurationInput) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(configurationInput.inputErrorClass);
    errorElement.classList.add(configurationInput.errorClass);
    errorElement.textContent = errorMessage;
};

// Функция удаления класса с ошибкой (Проектная 6)
const hideInputError = (formElement, inputElement, configurationInput) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(configurationInput.inputErrorClass);
    errorElement.classList.remove(configurationInput.errorClass);
    errorElement.textContent = '';
};

// Функция проверки валидности поля (Проектная 6)
const isValid = (formElement, inputElement, configurationInput) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, configurationInput); // Показать ошибку если невалидно
    } else {
        hideInputError(formElement, inputElement, configurationInput); //Скрыть ошибку если валидно
    }
};

// Функция переключения состояния кнопки Сохранить (Проектная 6)
const toggleButtonState = (inputList, buttonElement, configurationInput) => {
    if (hasInvalidInput(inputList, configurationInput)) {
        buttonElement.classList.add(configurationInput.inactiveButtonClass); // Добавить класс неактивности
        buttonElement.setAttribute('disabled', 'disabled'); // Добавить атрибут неактивности
    } else {
        buttonElement.classList.remove(configurationInput.inactiveButtonClass); // Удалить класс неактивности
        buttonElement.removeAttribute('disabled'); // Удалить атрибут неактивности
    }
};

// Функция проверки наличия невалидного поля (Проектная 6)
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

// Функция проверки наличия невалидного поля (Проектная 6)
const setEventListeners = (formElement, configurationInput) => {
    const inputList = Array.from(formElement.querySelectorAll(configurationInput.inputSelector));
    const buttonElement = formElement.querySelector(configurationInput.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, configurationInput);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, configurationInput);
            toggleButtonState(inputList, buttonElement, configurationInput);
        });
    });
};

//Функция включения валидации (Проектная 6)
const enableValidation = (configurationInput) => {
    const formList = Array.from(document.querySelectorAll(configurationInput.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, configurationInput);
    });

};

enableValidation(configurationOfClasses);
