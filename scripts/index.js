import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const profilePopupEditButton = document.querySelector(".profile__button-edit"); // Поиск кнопки "изменить на странице" (Проектная 4)
const profilePopup = document.querySelector(".popup-edit"); // Поиск попапа изменения профиля на странице (Проектная 4)
const formProfileEdit = document.querySelector(".popup__form-edit"); // Поиск формы в документе (Проектная 4)
const nameInput = document.querySelector(".popup__input_type_name"); // Поиск поля формы для ввода имени (Проектная 4)
const jobInput = document.querySelector(".popup__input_type_job"); // Поиск поля формы для ввода деятельности (Проектная 4)
const profileName = document.querySelector(".profile__title"); // Поиск имени профиля на странице (Проектная 4)
const profileJob = document.querySelector(".profile__subtitle"); // Поиск деятельности на странице (Проектная 4)
const cardPosition = document.querySelector(".elements__cards"); //Переменная определения места вставки template-элемента (Проектная 5)
const imagePopup = document.querySelector(".popup-image"); // Поиск попапа откртыия полноразмерного изображения (Проектная 5)
const cardPopupButton = document.querySelector(".profile__button-add"); // Поиск кнопки "Добавить публикацию" (Проектная 5)
const cardPopup = document.querySelector(".popup-add"); // Поиск попапа добавления публикации на странице (Проектная 5)
const formAddCard = document.querySelector('.popup__form-add'); // Поиск формы добавления карточки (Проектная 5)
const newCardImage = document.querySelector('.popup__input_type_name-place'); // Поиск поля ввода названия места для новой карточки (Проектная 5)
const newCardLink = document.querySelector('.popup__input_type_link-place'); // Поиск поля ввода ссылки на фотодля новой карточки (Проектная 5)
const popups = document.querySelectorAll('.popup') // Поиск всех попапов на странице (Проектная 7)
const imagePopupPicture = document.querySelector(".popup-image__picture")
const imagePopupName = document.querySelector(".popup-image__name")

const initialCards = [
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
    }
];

const configurationOfClasses =
{
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

// Функция открытия любого попапа (Проектная 5)
function openPopup(popup) {
    popup.classList.add('popup_opened'); // Добавляем класс открытого попапа
    document.addEventListener('keydown', closePopupEscClick)
}

//Функция закрытия попапа (Проектная 5)
function closePopup(popup) {
    popup.classList.remove("popup_opened"); // Удаляем класс открытого попапа
    document.removeEventListener('keydown', closePopupEscClick);
}

// Функция открытия формы редактирования профиля(Проектная 4)
function openProfileEditForm() {
    nameInput.value = profileName.textContent; // Передаем в поле формы имя профиля
    jobInput.value = profileJob.textContent; // Передаем в поле формы деятельность профиля
    openPopup(profilePopup);
    formProfileEditValidation.activateButton();
    formProfileEditValidation.resetValidation();
}
profilePopupEditButton.addEventListener("click", openProfileEditForm);

//Сохранение данных из попапа в профиль юзера (Проектная 4)
function handleProfileFormSubmit(evt) {
    profileName.textContent = nameInput.value; // Передаем данные из формы в имя профиля
    profileJob.textContent = jobInput.value; // Передаем данные из формы в деятельность профиля
    closePopup(profilePopup);
}
formProfileEdit.addEventListener('submit', handleProfileFormSubmit);

//Функция вставки любой карточки в разметку страницы (Проектная 5)
function renderCard(card, position) {
    position.prepend(card);
}

//Функция создания экземпляра класса Card (Проектная 7)
function createCard(item) {
    const card = new Card(item, '#elements__template', handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
}

//Функция добавления новой карточки через форму (Проектная 5)
function addNewCard() {
    formAddCard.addEventListener('submit', function (evt) {
        formAddCardValidation.disactivateButton();
        formAddCardValidation.resetValidation();
        const dataFromForm = {}; //Создаем объект на вход экземляра класса (Проектная 7) 
        dataFromForm.name = newCardImage.value; //Присваиваем значение ключу имя данные из поля ввода (Проектная 7)
        dataFromForm.link = newCardLink.value //Присваиваем значение ключу ссылка данные из поля ввода (Проектная 7)
        renderCard(createCard(dataFromForm), cardPosition); // Добавляем карточку в разметку (Проектаня 7)
        closePopup(cardPopup);
        evt.target.reset();
    });
}
addNewCard();

//Открытие попапа добавления карточки
cardPopupButton.addEventListener('click', () => openPopup(cardPopup));

//Закрытие любого попапа нажатием на Esc (Проектная 6)
function closePopupEscClick(evt) {
    if (evt.key === 'Escape') {
        const openedNowPopup = document.querySelector(".popup_opened"); // Ищем в документе открытый попап (Проектная 6)
        closePopup(openedNowPopup);
    }
}

//Размещаем 6 карточек из массива (Проектная 7)
initialCards.forEach((item) => {
    renderCard(createCard(item), cardPosition);
});

//Создаем экземпляр класса валидации  формы редактирования профиля (Проектная 7)
const formProfileEditValidation = new FormValidator(configurationOfClasses, formProfileEdit);
formProfileEditValidation.enableValidation();

//Создаем экземпляр класса валидации формы добавения карточки (Проектная 7)
const formAddCardValidation = new FormValidator(configurationOfClasses, formAddCard);
formAddCardValidation.enableValidation();

//Функция обработчик полноразмерного попапа (Проектная 7)
function handleCardClick(name, link) {
    imagePopupPicture.src = link;
    imagePopupPicture.alt = name;
    imagePopupName.textContent = name;
    openPopup(imagePopup);
}

//Универсальная функция закрытия попапов кликом на оверлей и на крестик (Проектная 7)
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
    })
})


