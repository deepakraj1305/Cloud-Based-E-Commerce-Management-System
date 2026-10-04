# Nimbus — Cloud-Based E-Commerce Management Platform

Nimbus is a responsive cloud-oriented e-commerce management dashboard for
monitoring products, orders, customers, inventory, payments, analytics,
cloud status, notifications, and store settings.

## Technologies Used

### Core Web Technologies
- **HTML5** — application structure and semantic markup.
- **CSS3** — custom styling, responsive behavior, animations, themes, and UI components.
- **JavaScript (ES6+)** — dashboard logic, navigation, interactions, data handling, modals, notifications, and dynamic content.

### UI & Styling
- **Tailwind CSS** — utility-first styling loaded through the Tailwind CDN.
- **Google Fonts (Inter)** — application typography.
- **Font Awesome 6.4.0** — interface and navigation icons.

### Data Visualization
- **Chart.js** — interactive dashboard charts and analytics visualizations.

### Browser Features
- **LocalStorage API** — client-side persistence for selected application settings/state.

## Project Structure

```text
nimbus-commerce-cloud/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
│   └── (project assets)
├── .gitignore
└── README.md
```

## Main Modules

- Dashboard
- Products
- Orders
- Customers
- Inventory
- Payments
- Analytics
- Cloud Management
- Notifications
- Settings

## Running the Project

This project uses CDN-based frontend libraries, so no package installation is
required for the current version.

### Option 1 — Open locally

Open `index.html` in a modern web browser.

### Option 2 — Use a local server

For the best browser experience, serve the folder using a local HTTP server.

Example with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Important

The current source is a **frontend dashboard/demo**. The interface contains
cloud/e-commerce management screens, but the supplied source does not contain
a real backend API, database integration, authentication service, or cloud
provider SDK.

The external libraries used by the UI are loaded from their public CDNs.

## GitHub Deployment

The project can be hosted as a static website using GitHub Pages because the
current application consists of HTML, CSS, JavaScript, and CDN resources.

## License

For educational and project demonstration purposes.
