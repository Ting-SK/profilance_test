![Profilance Group](https://static.tildacdn.com/tild3638-3338-4136-b038-313132306438/Group_640.svg "Profilance Group")

# Тестовое задание для frontend-разработчика Profilance Group

## Задание

Создать SPA на React + Redux. Использовать JS/JSX  

__Функционал__

- Вверху должна быть строка меню: Логотип из задания(при клике на него происходит переход на главную), Новости, Вход/Выход
- Страница "Главная". На ней должен быть текст: "Привет, Гость", если пользователь не авторизован и текст "Привет, {LOGIN}", если пользователь авторизован.
- "Вход". Производится на попапе, вводится логин и пароль. При неверном вводе должна быть индикация ошибки. После успешного входа попап закрывается.
- "Новости". Отображается список новостей и поиск по новостям. Фильтрация новостей должна производиться сразу при вводе текста поиска. У каждой новости есть: название, текст и дата создания.
- Должно быть 2 пользователя: пользователь, админ. 
У пользователя должна быть возможность добавить новость. У админа должна быть возможность одобрить новость или удалить. По умолчанию созданная пользователем новость не является одобренной.   
Гость должен видеть только одобренные админом новости. Гость не может создавать или одобрять новости.  
- Для упрощения работа выполняется без серверной части, начальная инициализация новостей задается в константе, правильные логин и пароль пользователей так же задаются константой.  
- Вся верстка должна быть выполнена с использованием БЭМ и SASS/SCSS. В списке новостей нужно сделать, чтобы для десктопной версии выводилось по 2 новости в строке, а в мобильной по одной.
  
---
## Решение
 
Приложение доступно на GitHub Pages [по ссылке](https://ting-sk.github.io/profilance_test/)

Для демонстрации наличия практических навыков работы с библиотекой redux, авторизация была выполнена без сохранения данных о пользователе в браузере, данные сохраняются в состоянии. 

Логины\пароли пользователей:
- user 1 : Stepa\Stepa
- user 2: Andrey \ Andrey
- admin: Admin\Admin


