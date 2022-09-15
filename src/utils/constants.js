export const profilePopupEditButton = document.querySelector(".profile__button-edit"); // Поиск кнопки "изменить на странице" (Проектная 4)
export const formProfileEdit = document.querySelector(".popup__form-edit"); // Поиск формы в документе (Проектная 4)
export const cardPopupButton = document.querySelector(".profile__button-add"); // Поиск кнопки "Добавить публикацию" (Проектная 5)
export const formAddCard = document.querySelector('.popup__form-add'); // Поиск формы добавления карточки (Проектная 5)
export const nameInput = document.querySelector(".popup__input_type_name"); // Поиск поля формы для ввода имени (Проектная 4)
export const jobInput = document.querySelector(".popup__input_type_job"); // Поиск поля формы для ввода деятельности (Проектная 4)

export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },

];

export const configurationOfClasses =
{
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};