# Mohamed Laaziri — Relaxed Scientific Academic Website

This package is a polished GitHub Pages website tailored to Mohamed Laaziri's research profile.
It uses plain HTML, CSS, and JavaScript: no framework, no build step, no tracking.

## Structure

```text
index.html          Home / research identity
research.html       Research programme, methods, solvers, applications
publications.html   Paper-by-paper summaries with achievements and figure slots
simulations.html    Software, solver architecture, and simulation outputs
teaching.html       Experience, education, skills, conferences
blog.html           Future technical notes
contact.html        Contact, CV, profiles
css/style.css       Relaxed scientific visual style
js/main.js          Dark mode, mobile menu, filters, animations
img/figures/        Placeholder figures you can replace later
files/              CV PDF
.nojekyll           Keeps GitHub Pages simple/static
```

## Add your figures later

Every placeholder SVG in `img/figures/` can be replaced with your own figure.
The easiest method is to keep the same filename, for example:

```text
img/figures/figure-thm-energy.svg
img/figures/figure-vem-coulomb.svg
img/figures/figure-paraview-output.svg
```

Recommended formats: SVG for clean diagrams, PNG/JPG for simulation screenshots.
Recommended width: at least 1200 px for crisp display.

## Deploy to GitHub Pages

Copy the files into the root of:

```text
https://github.com/Laaziri-Mohamed/Laaziri-Mohamed.github.io
```

Then push:

```bash
git add .
git commit -m "Relax website design and add paper summaries"
git push
```

GitHub Pages should serve the site at:

```text
https://laaziri-mohamed.github.io/
```

## Privacy note

The HTML pages show only professional contact information. The CV PDF may contain more personal information, so review it before publishing.
