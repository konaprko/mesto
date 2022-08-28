import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const profilePopupEditButton = document.querySelector(".profile__button-edit"); // Поиск кнопки "изменить на странице" (Проектная 4)
const profilePopup = document.querySelector(".popup-edit"); // Поиск попапа изменения профиля на странице (Проектная 4)
const profilePopupCloseButton = document.querySelector(".popup__close-edit"); // Поиск кнопки закрытия попапа на странице (Проектная 4)
const formProfileEdit = document.querySelector(".popup__form-edit"); // Поиск формы в документе (Проектная 4)
const nameInput = document.querySelector(".popup__input_type_name"); // Поиск поля формы для ввода имени (Проектная 4)
const jobInput = document.querySelector(".popup__input_type_job"); // Поиск поля формы для ввода деятельности (Проектная 4)
const profileName = document.querySelector(".profile__title"); // Поиск имени профиля на странице (Проектная 4)
const profileJob = document.querySelector(".profile__subtitle"); // Поиск деятельности на странице (Проектная 4)

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

const cardPosition = document.querySelector(".elements__cards"); //Переменная определения места вставки template-элемента (Проектная 5)
const imagePopup = document.querySelector(".popup-image"); // Поиск попапа откртыия полноразмерного изображения (Проектная 5)
const cardPopupButton = document.querySelector(".profile__button-add"); // Поиск кнопки "Добавить публикацию" (Проектная 5)
const cardPopup = document.querySelector(".popup-add"); // Поиск попапа добавления публикации на странице (Проектная 5)
const cardPopupButtonClose = document.querySelector(".popup__close-add"); // Поиск кнопки закрытия попапа добавления на странице (Проектная 5)
const formAddCard = document.querySelector('.popup__form-add'); // Поиск формы добавления карточки (Проектная 5)
const newCardImage = document.querySelector('.popup__input_type_name-place'); // Поиск поля ввода названия места для новой карточки (Проектная 5)
const newCardLink = document.querySelector('.popup__input_type_link-place'); // Поиск поля ввода ссылки на фотодля новой карточки (Проектная 5)
const imagePopupButtonClose = document.querySelector(".popup__close-image"); // Поиск кнопки закрытия попапа полноразмерного изображения (Проектная 5)
const profilePopupSubmitButton = profilePopup.querySelector('.popup__button'); // Ищем в форме редактирования профиля кнопку сохранить (Проектная 6)
const cardPopupSubmitButton = cardPopup.querySelector('.popup__button'); // Ищем в форме добавления карточки кнопку сохранить (Проектная 6)


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
    profilePopupSubmitButton.removeAttribute('disabled'); // Включаем кнопку сохранить, чтобы кнопка была активна при открытии попапа (Проектная 6)
    profilePopupSubmitButton.classList.remove('popup__button_disabled'); // Добавить класс активности (Проектная 6)
}
profilePopupEditButton.addEventListener("click", openProfileEditForm);

//Закрытие формы редактирования профиля нажатием на крестик
profilePopupCloseButton.addEventListener('click', () => closePopup(profilePopup));

//Сохранение данных из попапа в профиль юзера (Проектная 4)
function formSubmitHandler(evt) {
    profileName.textContent = nameInput.value; // Передаем данные из формы в имя профиля
    profileJob.textContent = jobInput.value; // Передаем данные из формы в деятельность профиля
    closePopup(profilePopup);
}
formProfileEdit.addEventListener('submit', formSubmitHandler);


//Функция вставки любой карточки в разметку страницы (Проектная 5)
function renderCard(card, position) {
    position.prepend(card);
}


// Закрытие формы добавления карточки нажатием на крестик (Проектная 5)
cardPopupButtonClose.addEventListener('click', () => closePopup(cardPopup));

//Функция добавления новой карточки через форму (Проектная 5)
function addNewCard() {
    formAddCard.addEventListener('submit', function (evt) {
        cardPopupSubmitButton.setAttribute('disabled', 'disabled'); // Отключаем кнопку сохранить, чтобы не было возможности добавить карточку несколько  раз (Проектная 6)
        cardPopupSubmitButton.classList.add('popup__button_disabled'); // Добавить класс неактивности (Проектная 6)
        const dataFromForm = {}; //Создаем объект на вход экземляра класса (Проектная 7) 
        dataFromForm.name = newCardImage.value; //Присваиваем значение ключу имя данные из поля ввода (Проектная 7)
        dataFromForm.link = newCardLink.value //Присваиваем значение ключу ссылка данные из поля ввода (Проектная 7)
        const cardFromForm = new Card(dataFromForm, '#elements__template'); //создаем экземпляр класса Card (Проектная 7)
        const cardElementFromForm = cardFromForm.generateCard(); //генерируем карточку (Проектная 7)
        renderCard(cardElementFromForm, cardPosition) // Добавляем карточку в разметку (Проектаня 7)
        closePopup(cardPopup);
        evt.target.reset();
    });
}

addNewCard();



//Открытие попапа добавления карточки
cardPopupButton.addEventListener('click', () => openPopup(cardPopup));

//Закрытие попапа полноразмерного изображения (Проектная 5)
imagePopupButtonClose.addEventListener('click', () => closePopup(imagePopup));


//Закрытие любого попапа нажатием на Esc (Проектная 6)
function closePopupEscClick(evt) {
    if (evt.key === 'Escape') {
        const openedNowPopup = document.querySelector(".popup_opened"); // Ищем в документе открытый попап (Проектная 6)
        closePopup(openedNowPopup);
    }
}


//Функция закрытия любого попапа кликом на оверлей (Проектная 6)
function closePopupOverlayClick(evt, popup) {
    if (evt.target === evt.currentTarget) {
        closePopup(popup);
    }
}

//Навешиваем слушатель на попап полноразмерного изображения (Проектная 6)
imagePopup.addEventListener('click', (evt) => closePopupOverlayClick(evt, imagePopup));

//Навешиваем слушатель на попап добавления карточки (Проектная 6)
cardPopup.addEventListener('click', (evt) => closePopupOverlayClick(evt, cardPopup));

//Навешиваем слушатель на попап редактирования профиля (Проектная 6)
profilePopup.addEventListener('click', (evt) => closePopupOverlayClick(evt, profilePopup));

initialCards.forEach((item) => {
    const card = new Card(item, '#elements__template');
    const cardElement = card.generateCard();
    renderCard(cardElement, cardPosition)
});

//Создаем экземпляр класса валидации  формы редактирования профиля (Проектная 7)
const formProfileEditValidation = new FormValidator(configurationOfClasses, formProfileEdit);
formProfileEditValidation.enableValidation();


//Создаем экземпляр класса валидации формы добавения карточки (Проектная 7)
const formAddCardValidation = new FormValidator(configurationOfClasses, formAddCard);
formAddCardValidation.enableValidation();
