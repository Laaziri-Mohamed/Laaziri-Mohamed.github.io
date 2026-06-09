# Mohamed Laaziri — Personal Academic Website

Personalized static website for Mohamed Laaziri, built for GitHub Pages with plain HTML, CSS, and JavaScript. No build tools or frameworks are required.

## Structure

```text
index.html          Home / profile
research.html       Research themes
publications.html   Publications with filters
simulations.html    Software and numerical simulation work
teaching.html       Experience, education, conferences, languages
blog.html           Research notes / planned technical writing
contact.html        Contact links and CV
css/style.css       Styling and responsive layout
js/main.js          Dark mode, mobile navigation, publication filters
img/                SVG graphics and favicon
files/              CV PDF
.nojekyll           Disables Jekyll processing for this static site
```

## Deploy to your GitHub Pages repository

This ZIP is prepared for the root of:

```text
https://github.com/Laaziri-Mohamed/Laaziri-Mohamed.github.io
```

Clone the repository, copy/unzip the package contents into the repository root, then push:

```bash
git clone https://github.com/Laaziri-Mohamed/Laaziri-Mohamed.github.io.git
cd Laaziri-Mohamed.github.io

# Copy the files from this package into this folder, replacing the previous placeholder files.

git add .
git commit -m "Personalize academic website"
git push
```

In GitHub, check:

```text
Settings → Pages
Source: Deploy from a branch
Branch: main
Folder: /root
```

Your website URL should be:

```text
https://laaziri-mohamed.github.io/
```

## Customize later

Replace `img/profile-placeholder.svg` with a professional photo when you have one. Keep the file name simple, for example `img/profile.jpg`, then edit the image link in `index.html`.

## Update your CV

Replace this file whenever you update your CV:

```text
files/Mohamed_Laaziri_CV.pdf
```

## Privacy note

The HTML pages show your email, LinkedIn, GitHub, HAL profile, and professional location. They do not display your phone number or street address. The downloadable CV PDF may still contain personal contact information depending on the version you publish, so review it before pushing.
