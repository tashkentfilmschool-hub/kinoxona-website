# Kinoxona website concept

Концепт сайта независимого арт-кинотеатра Kinoxona в Ташкенте.

## Источники

- Материалы Kinoxona из папки проекта (`content/`)
- Экспорт официального Telegram-канала Kinoxona от 21 августа 2026 года
- Instagram: [@kinoxona_tfs](https://www.instagram.com/kinoxona_tfs/)
- Визуальные и функциональные референсы:
  - [ArtHouse Crouch End](https://www.arthousecrouchend.co.uk/)
  - [Ultimate Picture Palace](https://uppcinema.com/)
  - [Repertory NYC](https://www.repertory.nyc/)

## Локальный запуск

```bash
python3 -m http.server 4173
```

После этого открыть `http://localhost:4173`.

Самодостаточный файл `preview.html` со встроенными стилями, скриптами, данными
и изображениями создаётся командой `node build-preview.mjs`.

## Обновление афиши

Данные показов находятся в `data/screenings.json`. Сейчас на главной странице они используются как архив. Последние записи и изображения сверены с экспортом официального канала; рабочая сводка находится в `content/kinoxona-channel-export-summary.md`.

Когда Kinoxona объявит осеннюю программу, блок летней паузы можно заменить актуальной афишей, используя тот же формат данных.

Сайт двуязычный: русский и узбекский. Переводы интерфейса находятся в `script.js`.
