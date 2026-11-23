# Gemzo Car Rental website

A static website (HTML, CSS, JavaScript). No build step, no server code.

## Open it
Double-click `index.html` to view it in your browser (needs internet for the car photos, fonts and map).

## Edit cars and prices
Open `script.js`. At the top:
- `WHATSAPP_NUMBER`: the number bookings are sent to (now 970595552277).
- `CURRENCY`: now ₪.
- `FLEET`: one line per car (name, category, price per day, transmission, fuel, seats, photo).
  For your own car photos, put them in `images/` and set `image: "images/your-photo.jpg"`.

The current cars, prices and photos are examples. Replace them with your real fleet.

## Edit texts
All English and Arabic texts are in `script.js` under `I18N` (`en` and `ar`).

## Put it online (free options)
- Netlify Drop: go to app.netlify.com/drop and drag the whole `gemzo-website` folder in.
- GitHub Pages or Cloudflare Pages also work. Upload the folder as-is.
Then connect your own domain (for example gemzo.ps) from the hosting dashboard.
