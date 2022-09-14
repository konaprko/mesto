import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import {
    profilePopupEditButton,
    formProfileEdit,
    cardPosition,
    cardPopupButton,
    formAddCard,
    newCardImage,
    newCardLink,
    nameInput,
    jobInput,
    profileName,
    profileJob,
    initialCards,
    configurationOfClasses
} from "./utils/constants.js";

import './pages/index.css';

//Функция создания экземпляра класса Card (Проектная 7)
function createCard(item) {
    const card = new Card(item, '#elements__template', handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
}


//Создаем экземпляр класса валидации  формы редактирования профиля (Проектная 7)
const formProfileEditValidation = new FormValidator(configurationOfClasses, formProfileEdit);
formProfileEditValidation.enableValidation();

//Создаем экземпляр класса валидации формы добавения карточки (Проектная 7)
const formAddCardValidation = new FormValidator(configurationOfClasses, formAddCard);
formAddCardValidation.enableValidation();

//Функция обработчик полноразмерного попапа (Проектная 7)
function handleCardClick(name, link) {
    fullScreenImagePopup.open(name, link);
}

//Создаем экземпляр класса секции (Проектная 8)
const sectionCardList = new Section({
    data: initialCards,
    renderer: (item) => {
        sectionCardList.setItem(createCard(item));
    },
},
    cardPosition
);

sectionCardList.renderItems();

//Создаем экземпляр класса попапа с изображением (Проектная 8)
const fullScreenImagePopup = new PopupWithImage('.popup-image');
fullScreenImagePopup.setEventListeners();


//Экземпляр класса попапа добавления карточки (Проектная 8)
const addCardPopup = new PopupWithForm({
    popupSelector: '.popup-add',
    handleFormSubmit: () => {
        formAddCardValidation.disactivateButton();
        formAddCardValidation.resetValidation();
        const formData = {}; //Создаем объект на вход экземляра класса (Проектная 7) 
        formData.name = newCardImage.value; //Присваиваем значение ключу имя данные из поля ввода (Проектная 7)
        formData.link = newCardLink.value;
        sectionCardList.setItem(createCard(formData));
    }
});

//Устанавливаем слушатели попапу добавления карточки (Проектная 8)
addCardPopup.setEventListeners();

//Открытие экземпляра класса попапа добавения карточки нажатием на кнопку (Проектная 8)
cardPopupButton.addEventListener("click", function () {
    addCardPopup.open();
});

const userInfo = new UserInfo(profileName, profileJob);

// Создание экземпляра класса попап редактирования профиля (Проектная 8)
const popupEdit = new PopupWithForm({
    popupSelector: '.popup-edit', handleFormSubmit: (data) => {
        userInfo.setUserInfo(data);
    }
}
);

//Открытие попапа редактирования профиля (Проектная 8)
profilePopupEditButton.addEventListener("click", () => {
    popupEdit.open();
    formProfileEditValidation.activateButton();
    formProfileEditValidation.resetValidation();
    const profileInformation = userInfo.getUserInfo();
    nameInput.value = profileInformation.inputName;
    jobInput.value = profileInformation.inputJob;
})

popupEdit.setEventListeners();
