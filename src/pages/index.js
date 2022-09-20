import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
    profilePopupEditButton,
    formProfileEdit,
    cardPopupButton,
    formAddCard,
    nameInput,
    jobInput,
    initialCards,
    configurationOfClasses
} from "../utils/constants.js";

import './index.css';

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
    '.elements__cards',
);

sectionCardList.renderItems();

//Создаем экземпляр класса попапа с изображением (Проектная 8)
const fullScreenImagePopup = new PopupWithImage('.popup-image');
fullScreenImagePopup.setEventListeners();



//Экземпляр класса попапа добавления карточки (Проектная 8)
const addCardPopup = new PopupWithForm({
    popupSelector: '.popup-add',
    handleFormSubmit: (data) => {
        formAddCardValidation.disactivateButton();
        //Дизактивация кнопки здесь необходима, чтобы не было возможности добавить пустую карточку в момент отправки формы зажатием Enter
        const formData = {
            name: data.inputNamePlace,
            link: data.inputLinkPlace,
        };
        sectionCardList.setItem(createCard(formData));
    }
});

addCardPopup.setEventListeners();

//Открытие экземпляра класса попапа добавения карточки нажатием на кнопку (Проектная 8)
cardPopupButton.addEventListener("click", function () {
    formAddCardValidation.disactivateButton();
    addCardPopup.open();
    formAddCardValidation.resetValidation();
});

const userInfo = new UserInfo({
    name: '.profile__title',
    job: '.profile__subtitle',
});

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

