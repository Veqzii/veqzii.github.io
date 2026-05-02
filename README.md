# Portfolio Website

A personal portfolio site built for GitHub Pages.

## 🚀 Deploying to GitHub Pages

1. Create a new GitHub repository named `yourusername.github.io`
2. Upload all files in this folder to the repository root
3. Go to **Settings → Pages → Source** and select `main` branch
4. Your site will be live at `https://yourusername.github.io`

## 📁 Folder Structure

```
/
├── index.html       ← Main page (edit this to customise content)
├── style.css        ← All styles
├── main.js          ← Animations & interactivity
├── README.md        ← This file
├── art/             ← Drop your artwork images here (PNG, JPG, SVG)
└── docs/            ← Drop your documents here (DOCX, PDF)
    └── RPS_GDD.docx
```

## ✏️ Customising Your Content

### Change your name & links
Open `index.html` and search for:
- `Your Name` → replace with your name
- `YN` → replace with your initials
- `yourusername` → replace with your GitHub username
- `you@example.com` → replace with your email

### Add a game project
Copy one of the `<article class="game-card">` blocks and update:
- The thumbnail style / emoji
- Title, description
- GitHub link and document download link

### Add artwork
1. Drop your image into the `art/` folder
2. Copy an `<figure class="art-item">` block
3. Replace the preview div with `<img src="art/yourfile.jpg" alt="Title" />`
4. Update the `onclick` to `openLightbox('art/yourfile.jpg', 'Your Title')`

### Add a document
1. Drop your file into `docs/`
2. Copy a `.doc-row` block and update the filename, title and date

### Update career / timeline
Edit the `.tl-item` blocks — change dates, roles, descriptions and skill tags.

### Update skill bars
Change the `style="--w:XX%"` value on each `.skill-fill` div.
