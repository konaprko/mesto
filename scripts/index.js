
const popupBtn = document.querySelector(".profile__button-edit"); // Поиск кнопки "изменить на странице" (Проектная 4)
const popupEle = document.querySelector(".popup-edit"); // Поиск попапа на странице (Проектная 4)

const popupBtnClose = document.querySelector(".popup__close-edit"); // Поиск кнопки закрытия попапа на странице (Проектная 4)

const formElement = document.querySelector(".popup__form-edit"); // Поиск формы в документе (Проектная 4)
const nameInput = document.querySelector(".popup__input_type_name"); // Поиск поля формы для ввода имени (Проектная 4)
const jobInput = document.querySelector(".popup__input_type_job"); // Поиск поля формы для ввода деятельности (Проектная 4)

const profileName = document.querySelector(".profile__title"); // Поиск имени профиля на странице (Проектная 4)
const profileJob = document.querySelector(".profile__subtitle"); // Поиск деятельности на странице (Проектная 4)

// Функция открытия попапа (Проектная 4)

function popupOpen() {
    nameInput.value = profileName.textContent; // Передаем в поле формы имя профиля
    jobInput.value = profileJob.textContent; // Передаем в поле формы деятельность профиля
    popupEle.classList.add("popup_opened"); // Добавляем класс открытого попапа
}
popupBtn.addEventListener("click", popupOpen);


//Функция закрытия попапа (Проектная 4)

function popupClose() {
    popupEle.classList.remove("popup_opened"); // Удаляем класс открытого попапа
}
popupBtnClose.addEventListener("click", popupClose);

//Сохранение данных из попапа в профиль юзера (Проектная 4)

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value; // Передаем данные из формы в имя профиля
    profileJob.textContent = jobInput.value; // Передаем данные из формы в деятельность профиля
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);


//Массив карточек для инициализации (Проектная 5)
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

const cardTemplate = document.querySelector("#elements__template").content; //Переменная для хранения template-элемента (Проектная 5)

const cardPosition = document.querySelector(".elements__cards"); //Переменная определения места вставки template-элемента (Проектная 5)

//Функция добавления карточек (Проектная 5)
function addCards() {
    initialCards.forEach(createCard);
}


//Функция внесения данных, расстановки лайков (Проектная 5)
function createCard({ name, link }) {

    const cardItem = cardTemplate.querySelector(".elements__item").cloneNode(true);
    //Функция внесения названия и фото и добавения на страницу
    cardItem.querySelector(".elements__title").textContent = name;
    cardItem.querySelector(".elements__image").src = link;
    cardPosition.append(cardItem);

    //Функция лайка
    cardItem.querySelector('.elements__button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__button_active');
    });

    //Функция удаления карточки
    const cardDelete = cardItem.querySelector('.elements__button-remove');
    function itemDelete(evt) {
        const evtTarget = evt.target;
        cardItemDelete = evtTarget.closest('.elements__item');
        cardItemDelete.remove();
    }
    cardDelete.addEventListener('click', itemDelete);

}

addCards();



const popupBtnAdd = document.querySelector(".profile__button-add"); // Поиск кнопки "Добавить публикацию" (Проектная 5)
const popupEleAdd = document.querySelector(".popup-add"); // Поиск попапа добавления публикации на странице (Проектная 5)

// Функция открытия попапа добавления карточки (Проектная 5)

function popupOpenAdd() {
    popupEleAdd.classList.add("popup_opened"); // Добавляем класс открытого попапа
}
popupBtnAdd.addEventListener("click", popupOpenAdd);


const popupBtnCloseAdd = document.querySelector(".popup__close-add"); // Поиск кнопки закрытия попапа добавления на странице (Проектная 5)


//Функция закрытия попапа (Проектная 5)

function popupCloseAdd() {
    popupEleAdd.classList.remove("popup_opened"); // Удаляем класс открытого попапа
}
popupBtnCloseAdd.addEventListener("click", popupCloseAdd);