# SEA1.RU -- Sochi Event Agency

Сайт event-агентства в Сочи. Многостраничный сайт на Vite + GSAP.

## Структура проекта

```
sea1.ru/
  index.html              -- Главная (RU)
  specialists/index.html  -- Специалисты (RU)
  services/index.html     -- Услуги (RU)
  about/index.html        -- О нас (RU)
  contacts/index.html     -- Контакты (RU)
  en/                     -- Английская версия
    index.html            -- Home (EN)
    specialists/           -- Specialists (EN)
    services/              -- Services (EN)
    about/                 -- About (EN)
    contacts/              -- Contact (EN)
  src/
    style.css             -- Все стили
    js/main.js            -- GSAP анимации, навигация, слайдер
  public/
    images/               -- Все изображения
    robots.txt
    sitemap.xml
  vite.config.js          -- Сборка, 11 entry points
  vercel.json             -- Конфиг деплоя
```

## Стек

- **Vite 6** -- сборка и dev-сервер
- **GSAP 3.12** -- анимации (ScrollTrigger, parallax)
- **Vanilla CSS** -- кастомные свойства, адаптив
- **Vercel** -- хостинг и CDN

## Команды

```bash
npm install          # Установить зависимости
npm run dev          # Dev-сервер (localhost:3000)
npm run build        # Production-сборка в dist/
```

## Деплой

```bash
npm run build
npx vercel deploy --prod --yes --archive=tgz
```

## Домены

- **https://sea1.ru** -- основной домен (DNS: Beget -> Vercel)
- **https://www.sea1.ru** -- www-версия
- **https://sea1-ecru.vercel.app** -- Vercel-алиас

## SEO

- Meta-теги, Open Graph на всех страницах
- Schema.org (EventPlanningBusiness)
- hreflang для RU/EN версий
- Sitemap с двуязычными ссылками
- Preload hero-изображения, lazy loading
- font-display: swap для Google Fonts

## Дизайн

- Темная тема (#0a0a0a) с золотым акцентом (#e8a849)
- Шрифты: Montserrat + Bodoni Moda
- Адаптив: 320px -- 1920px+
- Анимации: reveal, parallax, count-up, marquee
