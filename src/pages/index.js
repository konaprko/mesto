import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import {
  profilePopupEditButton,
  formProfileEdit,
  cardPopupButton,
  formAddCard,
  nameInput,
  jobInput,
  configurationOfClasses,
  formAvatarEdit,
  apiData,
  avatar,
  buttonEditAvatar
} from "../utils/constants.js";
import './index.css';

let userId;
let sectionCardList;

//Функция создания экземпляра класса Card (Проектная 7)
function createCard(item) {
  const card = new Card(
    {
      data: item,
      userId: userId,
      handleAddLike: (cardId) => {
        api.addLike(cardId)
          .then((data) => {
            card.handleLikeCard(data);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      },
      handleRemoveLike: (cardId) => {
        api.removeLike(cardId)
          .then((data) => {
            card.handleLikeCard(data);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      },
      handleDeleteCard: (cardId) => {
        deleteCardPopup.open();
        deleteCardPopup.submitDeleteCard(() => {
          api.deleteCard(cardId)
            .then(() => {
              deleteCardPopup.close();
              card.deleteCard();
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}`);
            });
        });
      },
    },
    '#elements__template',
    handleCardClick,

  );
  const cardElement = card.generateCard();
  return cardElement;
}

//Функция обработчик полноразмерного попапа (Проектная 7)
function handleCardClick(name, link) {
  fullScreenImagePopup.open(name, link);
}


const api = new Api(apiData);

const userInformation =
  api.getInfo()
    .then(function (data) {
      userId = data._id;
      userInfo.setUserInfo(data)
      avatar.setAttribute('src', data.avatar);
    })

// Генерация карточек (Проектная 9)
const serverCards =
  api.getInitialCards()
    .then(function (info) {
      sectionCardList = new Section(
        {
          data: info.reverse(),
          renderer: (item) => {
            sectionCardList.setItem(createCard(item));
          },
        },
        '.elements__cards'
      );
    })
    .catch((err) => {
      console.log(err);
    });

Promise.all([userInformation, serverCards]).then(() => sectionCardList.renderItems());

//Создаем экземпляр класса попапа с изображением (Проектная 8)
const fullScreenImagePopup = new PopupWithImage('.popup-image');
fullScreenImagePopup.setEventListeners();

//Создаем экземпляр класса попапа с добавлениеми карточки (Проектная 9)
const AddCardPopup = new PopupWithForm(
  {
    popupSelector: '.popup-add',
    handleFormSubmit: (item) => {
      AddCardPopup.loading(true);
      api
        .makeNewCard({ name: item.inputNamePlace, link: item.inputLinkPlace })
        .then((data) => {
          sectionCardList.setItem(
            createCard(data)
          );
        })
        .then(
          () => AddCardPopup.close(),
        )
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          AddCardPopup.loading(false);
        });
    },
  },
);
AddCardPopup.setEventListeners();

//Открытие экземпляра класса попапа добавения карточки нажатием на кнопку (Проектная 8)
cardPopupButton.addEventListener("click", function () {
  formAddCardValidation.disactivateButton();
  AddCardPopup.open();
  formAddCardValidation.resetValidation();
});


const userInfo = new UserInfo({
  name: '.profile__title',
  job: '.profile__subtitle',
});

//Создаем экземпляр класса попапа с редактирвоанием профиля (Проектная 9)
const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup-edit',
  handleFormSubmit: (dataForm) => {
    editProfilePopup.loading(true);

    api.editUserInfo(dataForm)
      .then((dataForm) => {
        userInfo.setUserInfo(dataForm);
        editProfilePopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editProfilePopup.loading(false);
      });
  }
});
editProfilePopup.setEventListeners();

//Открытие попапа редактирования профиля (Проектная 8)
profilePopupEditButton.addEventListener("click", () => {
  editProfilePopup.open();
  formProfileEditValidation.activateButton();
  formProfileEditValidation.resetValidation();
  const profileInformation = userInfo.getUserInfo();
  nameInput.value = profileInformation.inputName;
  jobInput.value = profileInformation.inputJob;
})

//Создание экземпляра класса попапа удаления карточки (Проектная 9)
const deleteCardPopup = new PopupWithSubmit({
  popupSelector: '.popup-delete'
});
deleteCardPopup.setEventListeners();

//Создание экземпляра класса попапа реадктирования аватара (Проектная 9)
const editAvatarPopup = new PopupWithForm({
  popupSelector: '.popup-avatar',
  handleFormSubmit: (data) => {
    editAvatarPopup.loading(true);
    api.editAvatar(data)
      .then((data) => {
        avatar.src = data.avatar;
        editAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editAvatarPopup.loading(false);
      });
  }
});
editAvatarPopup.setEventListeners();

//Открытие попапа редактирования аватара (Проектная 9)
buttonEditAvatar.addEventListener('click', () => {
  formAvatarEditValidation.resetValidation();
  formAvatarEditValidation.disactivateButton();
  editAvatarPopup.open();
});

//Создаем экземпляр класса валидации  формы редактирования профиля (Проектная 7)
const formProfileEditValidation = new FormValidator(configurationOfClasses, formProfileEdit);
formProfileEditValidation.enableValidation();

//Создаем экземпляр класса валидации формы добавения карточки (Проектная 7)
const formAddCardValidation = new FormValidator(configurationOfClasses, formAddCard);
formAddCardValidation.enableValidation();

//Создаем экземпляр класса валидации  формы редактирования аватара (Проектная 9)
const formAvatarEditValidation = new FormValidator(configurationOfClasses, formAvatarEdit);
formAvatarEditValidation.enableValidation();