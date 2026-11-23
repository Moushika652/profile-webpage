# Personal Profile Webpage

A small, static personal portfolio with a profile page and project page. This README explains the project structure, how to view the site locally, and how to customize it.

## Project structure
- `index.html` — profile, design-intern introduction, and contact links.
- `projects.html` — selected projects and repository links.
- `style.css` — shared responsive styles and visual effects.
- `interactions.js` — shared scroll reveals and pointer-based portrait tilt.
- `profile.jpeg` — profile portrait used on the home page.
- `service-worker.js` — caches the site so saved pages work without an internet connection.
- `offline.html` — fallback page used when an uncached page is requested offline.
- `manifest.webmanifest` — metadata for installable/offline use.
- `README.md` — this file.

## Preview
Service workers require an HTTP origin, so open the site through a local web server rather than by double-clicking `index.html`.

```powershell
python -m http.server 5500
```

Then visit `http://localhost:5500`. Once the page has loaded once, Chrome or Edge will serve the cached profile and project pages when you go offline.

## How to customize
- Edit `index.html` to change text, add sections, or update links.
- Edit `style.css` to change colors, spacing, and typography.

Key locations in `index.html`:
- Header area: update your name, title, and avatar.
- About section: update bio and contact details.
- Projects/Links: add or remove items as needed.

## Recommendations
- Use responsive units (rem, %) in `style.css` for better mobile support.
- Optimize images (WebP or compressed JPEG/PNG) to improve load times.
- Add meta tags in `index.html` for SEO and social sharing (`og:` tags).

## Next steps (optional)
- Add a `favicon.ico` and `manifest.json` for a more polished site.
- Deploy to GitHub Pages by pushing this repo and enabling Pages in repository settings.

## License
This project contains only minimal static files. Apply your preferred license if you plan to publish.

---
If you'd like, I can also:
- Add sample content (bio, links, avatar) into `index.html`.
- Improve styles for responsive layout and accessibility.
- Create a simple deploy script for GitHub Pages.

Tell me which of these you'd like next.
