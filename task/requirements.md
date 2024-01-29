Напишите код, который работает так:
1. Пользователь заполняет форму и нажав Submit - добавляет книгу в базу данных, отправив AJAX-запрос методом POST по адресу:
"http://books.danit.com.ua/books" объект вида:
{
    "name": "Book name",
    "author": "Books author",
    "isbn": "Book isbn"
}
Запрос требует авторизации с помощью заголовка "Authorization", со значением
"Bearer token". token возьмите из localstorage, сохраненный там из предыдущего задания.