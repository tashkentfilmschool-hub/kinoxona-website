# Kinoxona website concept

Концепт сайта независимого арт-кинотеатра Kinoxona в Ташкенте.

## Источники

- Материалы Kinoxona из папки проекта (`content/`)
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

Для просмотра прямо из файлового интерфейса откройте `preview.html`. Это
самодостаточная сборка с встроенными стилями, скриптами, данными и логотипом.
Пересобрать её можно командой `node build-preview.mjs`.

## Обновление афиши

Данные показов находятся в `data/screenings.json`. Сейчас на главной странице они используются как архив. Когда появится новая программа, можно добавить актуальный блок афиши, используя тот же формат данных.

Сайт двуязычный: русский и узбекский. Переводы интерфейса находятся в `script.js`.
