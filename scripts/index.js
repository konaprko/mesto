
const popupBtn = document.querySelector(".profile__button-edit"); // Поиск кнопки "изменить на странице" (Проектная 4)
const popupEle = document.querySelector(".popup-edit"); // Поиск попапа на странице (Проектная 4)
const popupBtnClose = document.querySelector(".popup__close-edit"); // Поиск кнопки закрытия попапа на странице (Проектная 4)
const formElement = document.querySelector(".popup__form-edit"); // Поиск формы в документе (Проектная 4)
const nameInput = document.querySelector(".popup__input_type_name"); // Поиск поля формы для ввода имени (Проектная 4)
const jobInput = document.querySelector(".popup__input_type_job"); // Поиск поля формы для ввода деятельности (Проектная 4)
const profileName = document.querySelector(".profile__title"); // Поиск имени профиля на странице (Проектная 4)
const profileJob = document.querySelector(".profile__subtitle"); // Поиск деятельности на странице (Проектная 4)


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
const popupEleImageFullScreen = document.querySelector(".popup-image"); // Поиск попапа откртыия полноразмерного изображения (Проектная 5)
const popupImagePicture = document.querySelector('.popup-image__picture'); // Поиск в попапе полноразмерного изображения картинки (Проектная 5)
const popupImageName = document.querySelector('.popup-image__name'); // Поиск в попапе полноразмерного изображения названия (Проектная 5)
const popupBtnAdd = document.querySelector(".profile__button-add"); // Поиск кнопки "Добавить публикацию" (Проектная 5)
const popupEleAdd = document.querySelector(".popup-add"); // Поиск попапа добавления публикации на странице (Проектная 5)
const popupBtnCloseAdd = document.querySelector(".popup__close-add"); // Поиск кнопки закрытия попапа добавления на странице (Проектная 5)
const addCardForm = document.querySelector('.popup__form-add'); // Поиск формы добавления карточки (Проектная 5)
const newCardImage = document.querySelector('.popup__input_type_name-place'); // Поиск поля ввода названия места для новой карточки (Проектная 5)
const newCardLink = document.querySelector('.popup__input_type_link-place'); // Поиск поля ввода ссылки на фотодля новой карточки (Проектная 5)

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

//Функция создания шаблонных карточек из массива (Проектная 5)
function addInitialCards() {
    initialCards.forEach(function (item) {
        createCard(item.name, item.link);
    });
}

//Функция создания карточки с внесением названия, фотографии, возможности лайкать, удалять, открывать полноразмерный вариант (Проектная 5)
function createCard(name, link) {
    const cardItem = cardTemplate.querySelector(".elements__item").cloneNode(true);
    cardItem.querySelector(".elements__title").textContent = name; //Переносим название в карточку
    cardItem.querySelector(".elements__image").src = link; //Переносим ссылку на фото в карточку
    cardPosition.prepend(cardItem); //Добавляем в разметку страницы в начало

    //Вызов функции лайка для срабатывания на каждой карточке
    like();

    //Удаление карточки
    const cardDelete = document.querySelector('.elements__button-remove');
    function itemDelete(evt) {
        const evtTarget = evt.target;
        cardItemDelete = evtTarget.closest('.elements__item');
        cardItemDelete.remove();
    }
    cardDelete.addEventListener('click', itemDelete);


    const popupBtnImageFullScreen = cardItem.querySelector(".elements__button-image"); // Поиск кнопки откртыия полноразмерного изображения (Проектная 5)  
    const cardImagePicture = cardItem.querySelector('.elements__image'); // Поиск в карточке изображения (Проектная 5)
    const cardImageName = cardItem.querySelector('.elements__title'); // Поиск в карточке названия названия (Проектная 5)
    //  Открытие попапа полноразмерного изображения карточки (Проектная 5)
    function popupOpenImageFullScreen() {
        popupEleImageFullScreen.classList.add("popup_opened"); // Добавляем класс открытого попапа
        popupImagePicture.src = cardImagePicture.src;
        popupImageName.textContent = cardImageName.textContent;
    }
    popupBtnImageFullScreen.addEventListener("click", popupOpenImageFullScreen);

    const popupBtnCloseImageFullScreen = document.querySelector(".popup__close-image"); // Поиск кнопки закрытия попапа полноразмерного изображения (Проектная 5)
    //Закрытие попапа полноразмерного изображения (Проектная 5)
    function popupClosImageFullScreen() {
        popupEleImageFullScreen.classList.remove("popup_opened"); // Удаляем класс открытого попапа
    }
    popupBtnCloseImageFullScreen.addEventListener("click", popupClosImageFullScreen);

    return cardItem;
}

// Функция открытия попапа добавления карточки (Проектная 5)
function popupOpenAdd() {
    popupEleAdd.classList.add("popup_opened"); // Добавляем класс открытого попапа
}
popupBtnAdd.addEventListener("click", popupOpenAdd);


//Функция закрытия попапа добавления карточки (Проектная 5)
function popupCloseAdd() {
    popupEleAdd.classList.remove("popup_opened"); // Удаляем класс открытого попапа
}
popupBtnCloseAdd.addEventListener("click", popupCloseAdd);

//Функция добавления новой карточки (Проектная 5)
function addNewCard() {
    addCardForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        createCard(newCardImage.value, newCardLink.value);
        popupCloseAdd()
    });
}

addInitialCards();
addNewCard();

//Функция лайка (Проектная 5)
function like() {
    document.querySelector('.elements__button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__button_active');
    });
}

