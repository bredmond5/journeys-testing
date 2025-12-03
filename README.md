# Journeys Testing

A simple, interactive JavaScript webpage demo with a modern UI.

## Features

- 🎨 Modern gradient design with smooth animations
- 👋 Interactive greeting system
- 🔢 Click counter with increment/decrement functionality
- 📱 Fully responsive design
- ⚡ Pure vanilla JavaScript (no dependencies)

## Local Development

Simply open `index.html` in your web browser:

```bash
open index.html
```

Or use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000`

## GitHub Pages Setup

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add simple JavaScript webpage"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section (in the left sidebar)
   - Under **Source**, select **Deploy from a branch**
   - Select **main** branch and **/ (root)** folder
   - Click **Save**

3. **Access your site:**
   - Your site will be available at: `https://<username>.github.io/<repository-name>/`
   - It may take a few minutes for the site to go live

## File Structure

```
journeys-testing/
├── index.html      # Main HTML file
├── app.js          # JavaScript functionality
├── test.js         # (existing file)
└── README.md       # This file
```

## Customization

Feel free to customize:
- Colors in the CSS gradient (search for `#667eea` and `#764ba2`)
- Greeting messages in the `greetings` array in `app.js`
- Add more interactive features in `app.js`

## License

MIT
