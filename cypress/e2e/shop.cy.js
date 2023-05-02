describe('Тестирование корзины на сайте HuntingPony', function () {   
    it('Оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-bottom').click(); // открыть раздел
        cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click(); // открыть карточку товара
        cy.get('.add-cart-counter__btn-label').click(); // добавить в корзину
        cy.get('[data-add-cart-counter-plus=""]').click(); // добавить 2 шт
        cy.get('.header__cart > .icon').click(); // перейти в корзину
        cy.get('.cart-controls > .button').click(); // оформить заказ
        cy.contains('Оформление заказа');
     })

})