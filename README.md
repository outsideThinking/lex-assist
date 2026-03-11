<<<<<<< HEAD
# LexAssist — React + Vite Frontend

## ▶️ Run the project

```bash
npm install
npm run dev
```

Open → **http://localhost:5173**

---

## 🔗 Add Your Google Form URL

Open `src/pages/Appointment.jsx` and replace **line 12**:

```js
// BEFORE
const GOOGLE_FORM_URL = 'https://forms.gle/YOUR_GOOGLE_FORM_LINK_HERE'

// AFTER — paste your actual Google Form link
const GOOGLE_FORM_URL = 'https://forms.gle/abc123XYZ'
```

### How to get your Google Form link
1. Open **Google Forms** → create your appointment form
2. Click **Send** button (top-right)
3. Click the **Link** tab (chain icon)
4. Copy the short URL → paste into `Appointment.jsx`

---

## 📁 Structure

```
lexassist-vite/
├── index.html               ← Vite entry HTML
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx             ← ReactDOM root
    ├── App.jsx              ← Router + layout
    ├── styles/global.css    ← Shared variables & base
    ├── components/
    │   ├── Navbar.jsx/css   ← Sticky responsive navbar
    │   └── Footer.jsx/css
    └── pages/
        ├── Home.jsx/css     ← Full landing page
        └── Appointment.jsx/css ← Google Form redirect
```

## 📦 Build for production

```bash
npm run build
npm run preview
```
=======
# LexAssist
>>>>>>> 897e25b528ebaa00a062e8fc843a02add430af37
