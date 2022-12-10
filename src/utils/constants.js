export const profilePopupEditButton = document.querySelector(".profile__button-edit"); // Поиск кнопки "изменить на странице" (Проектная 4)
export const formProfileEdit = document.querySelector(".popup__form-edit"); // Поиск формы в документе (Проектная 4)
export const cardPopupButton = document.querySelector(".profile__button-add"); // Поиск кнопки "Добавить публикацию" (Проектная 5)
export const formAddCard = document.querySelector('.popup__form-add'); // Поиск формы добавления карточки (Проектная 5)
export const nameInput = document.querySelector(".popup__input_type_name"); // Поиск поля формы для ввода имени (Проектная 4)
export const jobInput = document.querySelector(".popup__input_type_job"); // Поиск поля формы для ввода деятельности (Проектная 4)
export const formAvatarEdit = document.querySelector(".popup__form-avatar-edit"); // Поиск формы в документе (Проектная 4)
export const avatar = document.querySelector(".profile__image"); // Поиск аватара в документе (Проектная 9)
export const buttonEditAvatar = document.querySelector('.profile__avatar-button-edit'); // Поиск кнопки аватара в документе (Проектная 9)

export const configurationOfClasses =
{
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

export const apiData = {
    url: "https://mesto.nomoreparties.co/v1/cohort-54",
    headers: {
        "content-type": "application/json",
        authorization: "f8352379-b969-433a-b620-5690a6444b36",
    },
};