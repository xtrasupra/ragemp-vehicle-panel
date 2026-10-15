# RAGE MP Vehicle Panel

Панель управления автомобилем для RAGE Multiplayer на React. В комплекте — дизайн-макет Figma `MiniCar.fig`. Браузерная демонстрация работает без серверной части.

**Демо:** https://xtrasupra.github.io/ragemp-vehicle-panel/

## Локальный запуск

Требуется Node.js 24.

```sh
npm ci
npm start
```

## Сборка

```sh
npm run build
```

Готовый сайт находится в папке `build`. Пути к ресурсам относительные, поэтому сайт можно размещать в подпапке репозитория на GitHub Pages.

## Публикация на GitHub Pages

1. Загрузите проект в ветку `main` репозитория GitHub.
2. В репозитории откройте **Settings → Pages → Build and deployment → Source** и выберите **GitHub Actions**.
3. Во вкладке **Actions** запустите workflow **Deploy to GitHub Pages**, если он ещё не выполнился после загрузки.
4. После успешной публикации ссылка на сайт появится в **Settings → Pages** и в окружении **github-pages**.

Новые изменения в ветке `main` автоматически запускают сборку и публикацию сайта. Для бесплатного аккаунта GitHub репозиторий должен быть открытым.

GitHub Pages публикует содержимое `build`, а исходники и файл `MiniCar.fig` остаются в репозитории.
