# sarvezh1.github.io — Launch Candidate

Personal academic portfolio for Sarvesh Galgale.

## Local preview

From the project directory:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also use the VS Code Live Server extension.

## Structure

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── images/
        ├── profile.jpeg
        ├── clash-barbarian.png
        ├── favicon.svg
        └── og-card.png
```

## Publishing

Create a GitHub repository named exactly:

```text
sarvezh1.github.io
```

Push these files to the repository's default branch. GitHub Pages will publish the site at:

```text
https://sarvezh1.github.io/
```

## Notes

- Theme preference is remembered in the visitor's browser.
- The browser theme colour follows light/dark mode.
- Motion respects `prefers-reduced-motion`.
- Print styles hide navigation/accessibility UI for cleaner PDF output.
- Social-sharing and canonical metadata are included for the final GitHub Pages URL.

## License

This repository uses a dual-licensing structure to separate the open-source
website implementation from my personal and academic content.

- **Website code:** The original HTML structure, CSS, JavaScript, responsive
  layout, and interface implementation are released under the MIT License.
  You are welcome to use and adapt the code for your own website.

- **Personal and academic content:** My biography, research descriptions,
  academic history, publication information, photographs, contact details,
  personal writing, and other identity-specific content are All Rights
  Reserved and are not covered by the MIT License.

- **Third-party material:** Any externally owned artwork, trademarks, logos,
  publications, or other third-party material remains the property of its
  respective rights holder.

See the [`LICENSE`](LICENSE) file for full details.