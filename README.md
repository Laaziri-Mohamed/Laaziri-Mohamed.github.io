# Dr. [Your Name] — Academic Website

A minimal, clean academic website for a researcher in Physics & Mathematics.  
Built with pure HTML, CSS, and JavaScript — no build tools or frameworks required.

---

## 📁 File structure

```
site/
├── index.html          ← Home / About page
├── publications.html   ← Publications (with filter)
├── research.html       ← Research projects (with LaTeX)
├── simulations.html    ← Code & simulations (with video areas)
├── teaching.html       ← Courses & lectures
├── blog.html           ← Blog & notes
├── contact.html        ← Contact info & CV download
├── css/
│   └── style.css       ← All styles (includes dark mode)
├── js/
│   └── main.js         ← Dark mode toggle, nav, animations
└── img/
    └── (your photo and images go here)
```

---

## 🚀 STEP-BY-STEP: Deploy on GitHub Pages (free)

### Step 1: Create a GitHub account
1. Go to **https://github.com** and click "Sign up"
2. Choose a username (this will be part of your URL: `username.github.io`)
3. Verify your email

### Step 2: Install Git (if you don't have it)
- **macOS**: Open Terminal and type `git --version` (it will prompt you to install if missing)
- **Linux**: `sudo apt install git`
- **Windows**: Download from https://git-scm.com/download/win

### Step 3: Create your repository
1. On GitHub, click the **+** icon (top right) → **New repository**
2. Name it exactly: **`username.github.io`** (replace `username` with your actual GitHub username)
3. Keep it **Public**
4. Do NOT add a README (we'll push our own files)
5. Click **Create repository**

### Step 4: Upload your site files
Open a terminal and run these commands:

```bash
# Navigate to your site folder
cd path/to/your/site

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial website"

# Connect to GitHub (replace USERNAME with yours)
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git

# Push
git branch -M main
git push -u origin main
```

### Step 5: Your site is live! 🎉
After 1-2 minutes, visit: **https://username.github.io**

Your site is now live with free HTTPS (secure).

### Step 6 (optional): Add a custom domain
If you want `www.yourname.com` instead of `username.github.io`:

1. Buy a domain from **OVH** (https://www.ovh.com, ~10€/year) or **Namecheap** (https://www.namecheap.com)
2. On GitHub: Go to your repository → **Settings** → **Pages** → Under "Custom domain", type `www.yourname.com` → Save
3. At your domain registrar, add these DNS records:
   - **A records** pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME record**: `www` → `username.github.io`
4. Wait 15-30 minutes for DNS propagation
5. Back on GitHub Pages settings, check "Enforce HTTPS"

---

## ✏️ How to customize

### Replace placeholder content
Every `[bracketed item]` in the HTML files needs to be replaced with your real information:
- `[Your Name]` → your actual name
- `[Your Institution]` → your university/lab
- `[University]` → your university
- Publication titles, authors, links → your real publications
- etc.

### Add your photo
1. Place your photo in the `img/` folder (e.g., `img/photo.jpg`)
2. In `index.html`, find the `hero-photo` div and replace the placeholder text with:
   ```html
   <img src="img/photo.jpg" alt="Dr. Your Name">
   ```

### Add simulation videos
In `simulations.html`, each simulation card has a video area. You can:

**Option A — Host a video file:**
```html
<video controls poster="img/thumbnail.jpg">
  <source src="videos/my-simulation.mp4" type="video/mp4">
</video>
```

**Option B — Embed from YouTube:**
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        allowfullscreen loading="lazy"></iframe>
```

### Add a blog post
Copy a `<div class="blog-entry">` block in `blog.html` and update the title, date, excerpt, and tags. For full blog posts, create a new HTML file (e.g., `blog/my-post.html`) and link to it.

### Add a publication
Copy a `<div class="pub-item">` block in `publications.html` and update the content. Set the `data-type` attribute to `journal`, `preprint`, or `proceedings` for the filter to work.

### Update the CV
Place your CV PDF in the root folder (e.g., `cv.pdf`) and update the link in `contact.html`:
```html
<a href="cv.pdf" class="cv-btn">Download full CV (PDF)</a>
```

---

## 🔄 How to update your site

After making changes locally:

```bash
git add .
git commit -m "Update publications"
git push
```

Changes go live in ~1 minute.

---

## Features

- **Dark mode**: Automatic (follows system preference) + manual toggle button
- **Responsive**: Works on mobile, tablet, and desktop
- **Publication filters**: Filter by journal / preprint / proceedings
- **LaTeX math**: KaTeX rendering on the research page
- **Video areas**: Ready for local videos or YouTube embeds
- **Scroll animations**: Subtle fade-in on scroll
- **Fast**: Pure HTML/CSS/JS, no frameworks, loads in milliseconds
- **Secure**: Free HTTPS via GitHub Pages
- **No cookies, no tracking**: Privacy-respecting by default
