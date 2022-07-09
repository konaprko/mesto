// Открытие попапа

const popupBtn = document.querySelector(".profile__button-edit");
const popupEle = document.querySelector(".popup");

function popupOpen() {
    popupEle.classList.add("popup_opened");
}

popupBtn.addEventListener("click", popupOpen);

//Закрытие попапа

const popupBtnClose = document.querySelector(".popup__close");

function popupClose() {
    popupEle.classList.remove("popup_opened");
}

popupBtnClose.addEventListener("click", popupClose);

//Сохранение данных из попапа в профиль юзера

let formElement = document.querySelector(".popup__form")
let nameInput = document.querySelector(".input__name")
let jobInput = document.querySelector(".input__job")

function formSubmitHandler(evt) {
    evt.preventDefault();

    let profileName = document.querySelector(".profile__title");
    let profileJob = document.querySelector(".profile__subtitle");

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    popupEle.classList.remove("popup_opened");

}

formElement.addEventListener('submit', formSubmitHandler);









