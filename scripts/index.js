
const popupBtn = document.querySelector(".profile__button-edit"); // Поиск кнопки "изменить на странице"
const popupEle = document.querySelector(".popup"); // Поиск попапа на странице

const popupBtnClose = document.querySelector(".popup__close"); // Поиск кнопки закрытия попапа на странице

const formElement = document.querySelector(".popup__form"); // Поиск формы в документе
const nameInput = document.querySelector(".popup__input_type_name"); // Поиск поля формы для ввода имени
const jobInput = document.querySelector(".popup__input_type_job"); // Поиск поля формы для ввода деятельности

const profileName = document.querySelector(".profile__title"); // Поиск имени профиля на странице
const profileJob = document.querySelector(".profile__subtitle"); // Поиск деятельности на странице

// Функция открытия попапа

function popupOpen() {
    nameInput.value = profileName.textContent; // Передаем в поле формы имя профиля
    jobInput.value = profileJob.textContent; // Передаем в поле формы деятельность профиля
    popupEle.classList.add("popup_opened"); // Добавляем класс открытого попапа
}
popupBtn.addEventListener("click", popupOpen);


//Функция закрытия попапа

function popupClose() {
    popupEle.classList.remove("popup_opened"); // Удаляем класс открытого попапа
}
popupBtnClose.addEventListener("click", popupClose);

//Сохранение данных из попапа в профиль юзера

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value; // Передаем данные из формы в имя профиля
    profileJob.textContent = jobInput.value; // Передаем данные из формы в деятельность профиля
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);




//Массив карточек для инициализации
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

const cardTemplate = document.querySelector("#elements__template").content; //Переменная для хранения template-элемента

const cardPosition = document.querySelector(".elements__cards"); //Переменная определения места вставки template-элемента

//Функция добавления карточек
function addCards() {
    initialCards.forEach(createCard);
}


//Функция внесения данных, расстановки лайков
function createCard({ name, link }) {
    const cardItem = cardTemplate.querySelector(".elements__item").cloneNode(true);
    cardItem.querySelector(".elements__title").textContent = name;
    cardItem.querySelector(".elements__image").src = link;
    cardPosition.append(cardItem);


    cardItem.querySelector('.elements__button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__button_active');
    });
}

addCards();





/*
const deleteCardButton = document.querySelector(".elements__button-remove");
deleteCardButton.addEventListener("click", function () {
    cardItem.remove();
});
*/