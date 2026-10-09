# Nguyen Son Tung — Academic Portfolio

Static GitHub Pages portfolio.

## Important implementation detail

The stylesheet is embedded directly in each HTML page (`index.html`, `publications.html`, and `cv.html`). This deliberately avoids the intermittent stale/missing external CSS issue seen during rapid GitHub Pages redeployments, so navigation does not depend on reloading `assets/css/style.css` or using Ctrl+F5.

## Pages
- `index.html` — homepage and selected publications
- `publications.html` — publication list
- `cv.html` — CV page

There is no CV PDF in this project.


## Legacy cache cleanup

The three HTML pages automatically unregister legacy Service Workers and clear old Cache Storage entries from the previous GitHub Pages site.
