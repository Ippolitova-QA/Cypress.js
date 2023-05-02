describe('Тестирование авторизации', function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('https://login.qa.studio/')//посещение сайта
      })
    it('Проверка ввода верного логина и пароля', function () {
       cy.get('#mail').type('german@dolnikov.ru');//ввод логина
       cy.get('#pass').type('iLoveqastudio1');//ввод пароля
       cy.get('#loginButton').click();//клик по кнопке войти
       cy.contains('Авторизация прошла успешно').should('be.visible');//наличие сообщения об успешной авторизации
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');//наличие крестика
       })
    it('Проверка восстановления пароля', function () {
        cy.get('#forgotEmailButton').click();//нажать забыли пароль
        cy.get('#mailForgot').type('qa@mail.ru');//ввод логина
        cy.get('#restoreEmailButton').click();//клик по кнопке отправить код
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Проверка ввода верного логина и неверного пароля', function () {
        cy.get('#mail').type('german@dolnikov.ru');//ввод логина
        cy.get('#pass').type('iLove');//ввод неправильного пароля
        cy.get('#loginButton').click();//клик по кнопке войти
        cy.contains('Такого логина или пароля нет').should('be.visible');//наличие сообщения об ошибке
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//наличие крестика
        })
    it('Проверка ввода неправильного логина и правильного пароля', function () {
        cy.get('#mail').type('germa@dolnikov.ru');//ввод неправильного логина
        cy.get('#pass').type('iLoveqastudio1');//ввод пароля
        cy.get('#loginButton').click();//клик по кнопке войти
        cy.contains('Такого логина или пароля нет').should('be.visible');//наличие сообщения об ошибке
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//наличие крестика
        })
    it('Проверка валидации логина без @', function () {
        cy.get('#mail').type('germandolnikov.ru');//ввод логина без @
        cy.get('#pass').type('iLoveqastudio1');//ввод пароля
        cy.get('#loginButton').click();//клик по кнопке войти
        cy.contains('Нужно исправить проблему валидации').should('be.visible');//наличие сообщения об ошибке
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//наличие крестика
        })
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.get('#mail').type('GERman@dolnikov.ru');//ввод логина
        cy.get('#pass').type('iLoveqastudio1');//ввод пароля
        cy.get('#loginButton').click();//клик по кнопке войти
        cy.contains('Нужно исправить проблему валидации').should('be.visible');//наличие сообщения об ошибке
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//наличие крестика
        })
})