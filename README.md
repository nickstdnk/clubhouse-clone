# Установка

1. `npm install` - устанавливаем все зависимости
2. Для создания настроект приложения, необходимо скопировать файл .env.example и сохранить как .env в папке server
3. Указать `GITHUB_CLIENT_ID` и `GITHUB_CLIENT_SECRET`, которые можно вытащить из созданного OAuth-приложения в GitHub'e.

# Запуск

Необходимо запустить сервер и NextJS. Перед запуском, сделайте `npm run migrate` и далее:

1. `npm run server` - запускает Express-сервер
2. `npm run dev` - запускает NextJS-приложение
