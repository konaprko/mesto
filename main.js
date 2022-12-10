(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=e.data,i=e.userId,a=e.handleAddLike,u=e.handleRemoveLike,c=e.handleDeleteCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=o.name,this._link=o.link,this._templateSelector=n,this._handleCardClick=r,this._likes=o.likes,this._cardId=o._id,this._cardOwnerId=o.owner._id,this._userId=i,this._handleAddLike=a,this._handleRemoveLike=u,this._handleDeleteCard=c}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImageFullScreenButton=this._element.querySelector(".elements__image"),this._cardImageFullScreenButton.src=this._link,this._cardImageFullScreenButton.setAttribute("alt","".concat(this._name)),this._element.querySelector(".elements__title").textContent=this._name,this._cardDeleteButton=this._element.querySelector(".elements__button-remove"),this._cardLikeButton=this._element.querySelector(".elements__button"),this.likeCounter=this._element.querySelector(".elements__counter"),this.likeCounter.textContent=this._likes.length,this._deleteButton=this._element.querySelector(".elements__button-remove"),this._haveLike(),this._haveDeleteButton(),this._setEventListeners(),this._element}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._cardImageFullScreenButton.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._cardDeleteButton.addEventListener("click",(function(){e._handleDeleteCard(e._cardId)})),this._cardLikeButton.addEventListener("click",(function(){e._cardLikeButton.classList.contains("elements__button_active")?e._handleRemoveLike(e._cardId):e._handleAddLike(e._cardId)}))}},{key:"_haveDeleteButton",value:function(){this._userId!==this._cardOwnerId&&this._deleteButton.remove()}},{key:"_haveLike",value:function(){var e=this;this._likes.some((function(t){return e._userId===t._id}))&&this._cardLikeButton.classList.add("elements__button_active")}},{key:"handleLikeCard",value:function(e){this._likes=e.likes,this.likeCounter.textContent=this._likes.length,this._cardLikeButton.classList.toggle("elements__button_active")}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationConfigurator=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationConfigurator.inputSelector)),this._buttonElement=this._formElement.querySelector(this._validationConfigurator.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._validationConfigurator.inputErrorClass),n.classList.add(this._validationConfigurator.errorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._validationConfigurator.inputErrorClass),t.classList.remove(this._validationConfigurator.errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disactivateButton",value:function(){this._buttonElement.setAttribute("disabled","disabled"),this._buttonElement.classList.add(this._validationConfigurator.inactiveButtonClass)}},{key:"activateButton",value:function(){this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._validationConfigurator.inactiveButtonClass)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disactivateButton():this.activateButton()}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"setItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close"),this._escapeClose=this._closeByEsc.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._escapeClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._escapeClose)}},{key:"_closeByEsc",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup-image__picture"),t._popupName=t._popup.querySelector(".popup-image__name"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupName.textContent=e,this._popupImage.alt=e,s(d(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._popupForm=t._popup.querySelector(".popup__form"),t._inputList=t._popupForm.querySelectorAll(".popup__input"),t._submitButton=t._popupForm.querySelector(".popup__button"),t._submitButtonInitialText=t._submitButton.textContent,t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formData={},this._inputList.forEach((function(t){e._formData[t.name]=t.value})),this._formData}},{key:"setEventListeners",value:function(){var e=this;m(w(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){m(w(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"loading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitButtonInitialText}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.name,r=t.job;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameProfile=document.querySelector(n),this._jobProfile=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{inputName:this._nameProfile.textContent,inputJob:this._jobProfile.textContent}}},{key:"setUserInfo",value:function(e){this._nameProfile.textContent=e.name,this._jobProfile.textContent=e.about}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_haveError",value:function(e){return e.ok?e.json():Promise.reject("Статус ошибки: ".concat(e.status))}},{key:"getInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._haveError(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._haveError(t)}))}},{key:"editUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.inputName,about:e.inputJob})}).then((function(e){return t._haveError(e)}))}},{key:"makeNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._haveError(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._haveError(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._haveError(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._haveError(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._haveError(e)}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function R(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var D,x,A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"submitDeleteCard",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;I(T(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("click",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u),F=document.querySelector(".profile__button-edit"),N=document.querySelector(".popup__form-edit"),V=document.querySelector(".profile__button-add"),U=document.querySelector(".popup__form-add"),J=document.querySelector(".popup__input_type_name"),G=document.querySelector(".popup__input_type_job"),H=document.querySelector(".popup__form-avatar-edit"),z=document.querySelector(".profile__image"),M=document.querySelector(".profile__avatar-button-edit"),K={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function Q(e){var n=new t({data:e,userId:D,handleAddLike:function(e){X.addLike(e).then((function(e){n.handleLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},handleRemoveLike:function(e){X.removeLike(e).then((function(e){n.handleLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},handleDeleteCard:function(e){re.open(),re.submitDeleteCard((function(){X.deleteCard(e).then((function(){re.close(),n.deleteCard()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}))}},"#elements__template",W);return n.generateCard()}function W(e,t){$.open(e,t)}var X=new L({url:"https://mesto.nomoreparties.co/v1/cohort-54",headers:{"content-type":"application/json",authorization:"f8352379-b969-433a-b620-5690a6444b36"}}),Y=X.getInfo().then((function(e){D=e._id,te.setUserInfo(e),z.setAttribute("src",e.avatar)})),Z=X.getInitialCards().then((function(e){x=new i({data:e.reverse(),renderer:function(e){x.setItem(Q(e))}},".elements__cards")})).catch((function(e){console.log(e)}));Promise.all([Y,Z]).then((function(){return x.renderItems()}));var $=new _(".popup-image");$.setEventListeners();var ee=new E({popupSelector:".popup-add",handleFormSubmit:function(e){ee.loading(!0),X.makeNewCard({name:e.inputNamePlace,link:e.inputLinkPlace}).then((function(e){x.setItem(Q(e))})).then((function(){return ee.close()})).catch((function(e){console.log(e)})).finally((function(){ee.loading(!1)}))}});ee.setEventListeners(),V.addEventListener("click",(function(){ae.disactivateButton(),ee.open(),ae.resetValidation()}));var te=new O({name:".profile__title",job:".profile__subtitle"}),ne=new E({popupSelector:".popup-edit",handleFormSubmit:function(e){ne.loading(!0),X.editUserInfo(e).then((function(e){te.setUserInfo(e),ne.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ne.loading(!1)}))}});ne.setEventListeners(),F.addEventListener("click",(function(){ne.open(),ie.activateButton(),ie.resetValidation();var e=te.getUserInfo();J.value=e.inputName,G.value=e.inputJob}));var re=new A({popupSelector:".popup-delete"});re.setEventListeners();var oe=new E({popupSelector:".popup-avatar",handleFormSubmit:function(e){oe.loading(!0),X.editAvatar(e).then((function(e){z.src=e.avatar,oe.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){oe.loading(!1)}))}});oe.setEventListeners(),M.addEventListener("click",(function(){ue.resetValidation(),ue.disactivateButton(),oe.open()}));var ie=new r(K,N);ie.enableValidation();var ae=new r(K,U);ae.enableValidation();var ue=new r(K,H);ue.enableValidation()})();