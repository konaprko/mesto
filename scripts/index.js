
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
