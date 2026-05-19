# Social-potfolio
# 🌐 Tanmay's Social Portfolio

A clean, dark-themed social portfolio website built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.

---

## 📁 Project Structure

```
social/
├── index.html       # Main HTML — structure & content
├── style.css        # All styles — layout, animations, cards
├── script.js        # JavaScript — activity bars, scroll effects
└── README.md        # You're reading it!
```

---

## ✨ Features

- **Animated Hero Section** — floating gradient blobs, pop-in avatar with your photo, smooth fade-up text
- **Social Cards** — GitHub, LinkedIn, Instagram cards with live stats, activity bars, and hover effects
- **Skills Strip** — tag-based skill display with color-coded categories
- **Scroll Animations** — cards and sections animate in as you scroll
- **Grain Overlay** — subtle noise texture for a premium dark aesthetic
- **Fully Responsive** — works on mobile, tablet, and desktop
- **Zero Dependencies** — pure HTML/CSS/JS, no frameworks needed
- **Offline Ready** — profile photo is embedded as base64 (no server required)

---

## 🚀 Getting Started

### Run Locally

Just download all 3 files into the same folder and open `index.html` in your browser:

```
social/
├── index.html
├── style.css
└── script.js
```

> ⚠️ All 3 files **must be in the same folder** for the CSS and JS links to work.

### No build step needed — open and go!

---

## 🎨 Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure & semantic markup |
| CSS3 | Animations, grid layout, CSS variables |
| Vanilla JavaScript | Activity bars, scroll observer, interactions |
| Google Fonts | Syne (headings) + DM Sans (body) |

---

## 🔗 Social Links Included

| Platform | Handle | Link |
|---|---|---|
| GitHub | @tsahare98 | https://github.com/tsahare98 |
| LinkedIn | Tanmay Sahare | https://linkedin.com/in/tanmay-sahare-11205a335 |
| Instagram | @tanmay.sahare.14418 | https://instagram.com/tanmay.sahare.14418 |

---

## 🛠️ Customization Guide

### Update your stats
Open `index.html` and find the `stats-row` inside each card:

```html
<div class="stat"><span class="stat-val">3</span><span class="stat-lbl">Repos</span></div>
```

Change the number inside `stat-val` to your latest count.

### Add a new skill tag
In `index.html`, find the `skills-tags` div and add:

```html
<span class="tag">Your Skill</span>

<!-- Colored variants -->
<span class="tag gh">Yellow tag</span>   <!-- GitHub yellow -->
<span class="tag li">Blue tag</span>     <!-- LinkedIn blue -->
<span class="tag ig">Pink tag</span>     <!-- Instagram pink -->
```

### Change colors
All colors are CSS variables in `style.css`:

```css
:root {
  --bg:     #0d0d0d;   /* Page background */
  --card:   #161616;   /* Card background */
  --border: #2a2a2a;   /* Card borders */
  --gh:     #e8ff6b;   /* GitHub accent (yellow-green) */
  --li:     #4fc3f7;   /* LinkedIn accent (blue) */
  --ig:     #ff6b9d;   /* Instagram accent (pink) */
  --white:  #f5f5f5;   /* Primary text */
  --muted:  #888;      /* Secondary text */
}
```

### Update your photo
Replace the base64 string inside the `.avatar` `<img>` tag in `index.html`, or swap it with a file path:

```html
<!-- Using a local file instead of base64 -->
<div class="avatar">
  <img src="your-photo.jpg" alt="Tanmay" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"/>
</div>
```

---

## 📱 Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Mobile browsers | ✅ Full |

---

## 🗺️ Roadmap

Future ideas for this portfolio:

- [ ] Deploy to GitHub Pages or Vercel
- [ ] Add dark/light mode toggle
- [ ] Add more social platforms (Twitter/X, YouTube)
- [ ] Add a contact email button
- [ ] Link to a separate professional portfolio

---

## 👤 Author

**Tanmay Sahare**
CS Student · India · 2026

> *"Building cool things · Learning every day · A microcreator"*

---

## 📄 License

This project is open source — feel free to fork, modify, and use it for your own social portfolio.
