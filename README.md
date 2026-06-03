# Portfolio — Vue 3 + TypeScript + Vite
## Актуальное портфолио-приложение, собранное на Vue 3, TypeScript и Vite. Проект предназначен для презентации опыта, навыков, проектов и контактов в удобном, быстром и адаптивном формате.

# Стек
> ### Vue 3
> ### TypeScript
> ### Vue Router
> ### Vite
> ### SCSS

# Возможности
- Адаптивный интерфейс для desktop и mobile
- Раздел с информацией обо мне, навыках и опыте
- Витрина проектов с описанием и ссылками
- Контактный блок с быстрыми способами связи
- Типизация на TypeScript

# Структура проекта
```
src/
├── assets/        # статические ресурсы
├── components/    # переиспользуемые компоненты
├── views/         # страницы приложения
├── router/        # маршрутизация
├── stores/        # Pinia stores
├── types/         # общие типы TypeScript
├── composables/   # композиционные хуки
├── App.vue
└── main.ts
```

## Установка и запуск
```
npm install
npm run dev
```
После запуска приложение будет доступно по адресу, который покажет Vite в терминале.

## Сборка
```
npm run build
```

## Для локальной проверки production-сборки:
```
npm run preview
```

# Доступные скрипты
```
npm run dev      # запуск dev-сервера
npm run build    # production build
npm run preview  # локальный просмотр production build
npm run lint     # проверка линтером, если настроен
npm i18n:pull    # установка значений локалей из Google docs
npm deploy       # деплой в gh pages

```
