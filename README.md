# Shuvankar Das — Portfolio

A static portfolio site. No build step and nothing to install: it is plain HTML, CSS and JavaScript.

## Run it in VS Code

1. Unzip the folder and open it in VS Code (**File > Open Folder…** and choose `portfolio`).
2. Install the **Live Server** extension (Extensions panel, search "Live Server" by Ritwick Dey).
3. Right-click `index.html` and choose **Open with Live Server**.
   The site opens at `http://127.0.0.1:5500` and reloads every time you save a file.

You can also double-click `index.html` to open it straight in a browser. Live Server is just more convenient while editing.

## Folder layout

```
portfolio/
├── index.html            Home page: hero, about, experience, skills, contact
├── css/styles.css        All styling (colours and fonts are at the top)
├── js/projects.js        ALL project content: cards and full project pages
├── js/main.js            Site behaviour (no need to edit)
├── assets/               Your CV (linked from the "View CV" button)
└── images/               One folder per project
    ├── upper-limb-exoskeleton/
    ├── ankle-exoskeleton/
    ├── waterway-uav/
    ├── surgical-robot/
    ├── welding-robot/
    └── go-kart/
```

## Add your project images

Put the pictures for each project in its folder under `images/` and name them:

| File name  | Where it appears                                         |
|------------|----------------------------------------------------------|
| `cover`    | On the project card and at the top of the project page   |
| `01`       | Gallery, first picture                                   |
| `02`       | Gallery, second picture                                  |
| `03`       | Gallery, third picture                                   |

Any of `.jpg`, `.jpeg`, `.png` or `.webp` works, for example `images/go-kart/cover.jpg`.
Landscape pictures look best (about 1600 px wide for covers, 1200 px for the gallery).

To add more gallery pictures or write captions, open `js/projects.js`, find the project and edit its `gallery` list:

```js
gallery: [
  { file: "01", caption: "CAD assembly of the elbow joint" },
  { file: "02", caption: "FEA result at 130 kg user load" },
  { file: "03", caption: "First assembled prototype" },
  { file: "04", caption: "Bench test of the EMG control loop" }
]
```

Until a picture exists, its slot shows the file path it is waiting for. Before you publish the
site, set `showImageHints: false` at the top of `js/projects.js` and any empty gallery slots are hidden.

## Edit the text

- **Home page text** (summary, experience, skills, contact): edit `index.html`.
- **Projects**: edit `js/projects.js`. Each project has a short `summary` (shown on the card)
  and `sections` (the full write-up on its own page), plus the `specs` table and `outcomes` list.
- **Add a project**: copy one whole `{ ... }` block in `js/projects.js`, give it a new `id`,
  and create a matching folder in `images/`.

## Change the colours

All colours are defined once at the top of `css/styles.css` (light theme first, dark theme below it).
Changing `--accent` changes the highlight colour across the whole site.

## Put it online later

The folder can be uploaded as it is to GitHub Pages, Netlify or Vercel. There is nothing to compile.
