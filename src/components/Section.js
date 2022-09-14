export default class Section {
    constructor({ data, renderer }, containerSelector) {
        this._renderedItems = data;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    //Метод вставки в разметку страницы
    setItem(element) {
        this._container.prepend(element);
    }

    //Метод отрисовки карточек
    renderItems() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    }

}