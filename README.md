# Sarvesh Galgale - Academic Research Portfolio

Source for [sarvezh1.github.io](https://sarvezh1.github.io/), a static academic portfolio with five sections: About Me, Ongoing Projects, Completed Projects, Workflows & Pipelines, and Publications & Preprints.

## Structure

- `index.html` contains the page and approved portfolio content.
- `styles.css` contains custom visual and interaction styles. The page also loads the browser Tailwind runtime and Google Fonts.
- `script.js` handles tab selection, number keys 1-5, portrait sizing, and abstract dismissal. Native HTML `details` elements provide abstract expansion.
- `assets/images/` contains the profile portrait, Barbarian image, and the two workflow screenshots.

## Local preview

From the repository root, run `python -m http.server 8765 --bind 127.0.0.1` and open `http://127.0.0.1:8765/`.

## Updating content

Edit the appropriate section in `index.html` to update projects, workflows, publications, links, and text. Keep local image paths relative to the repository root. Use `styles.css` for targeted styling changes and `script.js` for navigation or abstract interaction changes. The site has no build step.

## License

The [`LICENSE`](LICENSE) file distinguishes MIT-licensed website code from Sarvesh Galgale's reserved personal and academic content. Third-party artwork, names, and trademarks remain with their respective owners and are not included in the MIT grant.
