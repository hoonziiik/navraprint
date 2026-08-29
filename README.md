# NavraPrint

Prezentační web pro NavraPrint — český projekt originálních 3D výrobků. Web je postavený jako moderní produktová landing page s tmavým a světlým vzhledem, katalogem a detaily produktů.

## Technologie

- Vue 3 + TypeScript
- Vite
- Vue Router
- Tailwind CSS 4 (připravený pro další použití)
- Lokální CSS komponenty a CSS proměnné pro design systém

## Spuštění projektu

```bash
yarn
yarn dev
```

Další příkazy:

```bash
yarn format  # Naformátuje projekt pomocí Prettieru
yarn build   # TypeScript kontrola a produkční build
yarn preview # Lokální náhled produkčního buildu
```

## Stránky

| Cesta             | Obsah                                                                 |
| ----------------- | --------------------------------------------------------------------- |
| `/`               | Homepage s hero sekcí, výběrem produktů, informacemi o projektu a FAQ |
| `/produkty`       | Katalog produktů                                                      |
| `/produkty/:slug` | Detail konkrétního produktu                                           |

Routy jsou definované v [src/router/index.ts](src/router/index.ts).

## Produkty

Produktová data jsou zatím lokální v [src/data/products.ts](src/data/products.ts). Každý produkt obsahuje slug, název, cenu, popis, dostupné barvy, materiál a náhledový obrázek.

Pro přidání produktu stačí doplnit nový záznam do tohoto souboru a přidat jeho obrázek do `src/assets`.

## Vzhled a témata

Design používá near-black pozadí s violet a cyan akcenty. Přepínač v hlavičce umožňuje dark a light variantu; poslední zvolená varianta se ukládá pouze lokálně v prohlížeči.

Hlavní design tokeny jsou v [src/style.css](src/style.css) a sekce homepage jsou samostatné Vue komponenty v `src/components`.

## Objednávky

Web nemá backend ani databázi. Budoucí objednávky produktů budou napojené na externí FAPI formuláře z detailu produktu.

## Nasazení

Jde o SPA s Vue Routerem. Hosting proto musí mít nastavený fallback všech neznámých cest na `index.html`, aby fungovaly přímé návštěvy například `/produkty/drzak-na-sluchatka`.
