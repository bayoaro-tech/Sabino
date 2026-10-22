# SABINO

SABINO is a restaurant website concept for a contemporary African dining experience. It showcases dishes inspired by African culinary heritage and helps visitors explore the menu, prepare a reservation inquiry, and contact the restaurant.

## Features

- Homepage introducing SABINO and linking to the menu and reservations.
- Menu of dishes grouped by category, with images and prices in Nigerian naira.
- Dish inquiry list that visitors can build from the menu and review on the reservation page.
- Reservation and contact forms with client-side confirmation states.
- Contact details, location, and opening hours.
- Responsive navigation and shared footer.

## Pages

- **Home** (`/`) — restaurant introduction and prominent menu and reservation links.
- **Menu** (`/menu`) — browse dishes by category and add dishes to a reservation inquiry.
- **Reservations** (`/reservations`) — review selected dishes and submit a table reservation form.
- **Contact** (`/contact`) — view contact details and submit a message.

## Tech stack

- React
- React Router
- Vite
- ESLint

## Getting started

### Requirements

- Node.js and npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |

## Project structure

```text
src/
  components/   Shared navigation, footer, loading, and food-card components
  data/         Menu item data
  pages/        Home, menu, reservations, contact, and other page components
  assets/       App images and bundled assets
  App.jsx       Application routes and shared layout
public/         Publicly served food images and icons
```

## Current implementation notes

The selected menu dishes are stored in the browser's local storage so they remain available when navigating to the reservation page. Reservation and contact form submissions currently show an on-page confirmation only; no backend or external service is configured to receive or process submissions.
