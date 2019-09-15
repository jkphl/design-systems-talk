---
title: "Herausforderungen bei der Kopplung von Fractal & TYPO3"
theme: ndf
gradient: 0
---
## Tools

### Herausforderungen

- Fractal standardmäßig auf einfaches Templating ausgelegt (Handlebars)
- Fractal dateibasiert (JSON + Templates für Komponenten, Markdown für Dokumentation)
- TYPO3 kombiniert HTML-Rendering-Mechanismen
    - Fluid (Templates + View Helper)
    - TypoScript (konfigurationsbasierrtes Rendering)
    - Extbase-Plugins (MVC-Architektur)
    - Form Framework, Custom Content Elements, HTTP-Requests, etc.
