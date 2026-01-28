# Portfolio Frontend

Modern, responsive personal portfolio website for Pyae Phyo Thein - Full-Stack Developer.

## 🚀 Features

- ✨ Clean, modern UI design
- 📱 Fully responsive (mobile-first approach)
- 🎨 Smooth animations and transitions
- 📧 Contact form with Django REST API integration
- 🎯 Semantic HTML5
- 🌈 Tailwind CSS styling
- ⚡ Vanilla JavaScript (no frameworks)
- 🚀 Ready for GitHub Pages deployment

## 📁 Project Structure

```
portfolio-frontend/
├── index.html              # Main HTML file
├── assets/
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── images/            # Image assets (add your images here)
│       ├── profile.jpg
│       ├── project-pms.jpg
│       ├── project-goorca.jpg
│       ├── project-attendance.jpg
│       ├── project-raja.jpg
│       ├── project-mpay.jpg
│       └── project-portfolio.jpg
└── README.md
```

## 🛠️ Setup Instructions

### 1. Clone or Download

```bash
git clone https://github.com/YOUR_USERNAME/portfolio-frontend.git
cd portfolio-frontend
```

### 2. Add Your Images

Place your images in the `assets/images/` folder:
- `profile.jpg` - Your profile photo
- `project-*.jpg` - Project screenshots/images

### 3. Update API URL

Open `assets/js/main.js` and update the API URL:

```javascript
const API_URL = 'https://your-backend-app.railway.app/api/contact/';
```

### 4. Test Locally

Simply open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html -> "Open with Live Server"
```

## 📤 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `portfolio-frontend`
2. Don't initialize with README (we already have one)

### Step 2: Push Code to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio-frontend.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Your site will be published at: `https://YOUR_USERNAME.github.io/portfolio-frontend/`

### Step 4: Update API URL

After deploying your Django backend (see backend README), update the API URL in `assets/js/main.js`:

```javascript
const API_URL = 'https://your-deployed-backend.railway.app/api/contact/';
```

Then commit and push:

```bash
git add assets/js/main.js
git commit -m "Update API URL to production backend"
git push
```

## 🎨 Customization

### Update Personal Information

Edit `index.html` to update:
- Name, role, introduction (Hero section)
- About me text
- Skills and technologies
- Project details
- Experience and certifications
- Contact information

### Change Colors

The site uses an indigo/purple gradient theme. To change colors, search and replace in `index.html`:
- `indigo-` → your preferred color
- `purple-` → your accent color

Tailwind color options: `blue`, `green`, `red`, `yellow`, `pink`, `gray`, etc.

### Add More Projects

In the Projects section of `index.html`, duplicate this block:

```html
<div class="project-card bg-white rounded-xl shadow-lg overflow-hidden">
    <!-- Add your project details here -->
</div>
```

## 📧 Contact Form

The contact form sends data to your Django backend via POST request:

```javascript
POST /api/contact/
{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello!"
}
```

Make sure your Django backend is deployed and CORS is configured to accept requests from your GitHub Pages domain.

## 🔧 Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Pyae Phyo Thein**
- GitHub: [@pyaephyothein](https://github.com/pyaephyothein)
- Phone: +66 969347540
- Location: Bangkok, Thailand

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements!

---

Built with ❤️ using HTML5, Tailwind CSS, and Vanilla JavaScript
