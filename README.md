# Nguyen Son Tung — Academic Portfolio

A lightweight, responsive academic portfolio designed for GitHub Pages. No build step, package manager, or framework is required.

## Deploy in ~2 minutes

1. Create a GitHub repository named exactly:
   ```
   YOUR_USERNAME.github.io
   ```
2. Upload all files from this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then save.
6. Your site will appear at `https://YOUR_USERNAME.github.io`.

## Before publishing

- Replace the initials avatar in `index.html` with a real photo if desired.
- Verify the GitHub, DBLP, and ORCID links.
- Add your Google Scholar / LinkedIn links when you have the exact URLs.
- Update publication links as papers receive final DOI / ACL Anthology pages.
- The downloadable CV is at `assets/files/Nguyen_Son_Tung_CV.pdf`.

## Edit content

- Main content: `index.html`
- Styling: `assets/css/style.css`
- Theme toggle & publication filtering: `assets/js/main.js`

## Optional profile photo

Put a photo at `assets/img/profile.jpg`, then replace:

```html
<div class="avatar">TN</div>
```

with:

```html
<img class="avatar-photo" src="assets/img/profile.jpg" alt="Nguyen Son Tung" />
```

and add this CSS:

```css
.avatar-photo {
  width: 130px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 30px;
  margin-bottom: 26px;
}
```
