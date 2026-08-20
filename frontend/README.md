# Car Dealership — Frontend

Vite + React (JavaScript) frontend with a public car listing site and a mocked CRM.

## Running

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` if you want to set `VITE_API_URL` (currently unused — see below).

## CRM login

The CRM (`/crm/*`) is protected by a mocked login. Use:

- Email: `admin@dealership.com`
- Password: `admin123`

## Swapping in a real backend

There is no real backend yet. `src/api/cars.js` and `src/api/auth.js` currently read from
`src/data/mockCars.js` / `src/data/mockUser.js` with an artificial delay, and return the same
`{ data, error }` shape a real REST API would.

To connect the real Express backend later:

1. Set `VITE_API_URL` in `.env` to point at the backend.
2. Replace the mock logic inside `api/cars.js` and `api/auth.js` with calls through
   `src/api/client.js` (a thin `fetch` wrapper already reading `VITE_API_URL`).

Pages and components never import mock data directly — they only call `api/cars.js` /
`api/auth.js`, so no page code needs to change when the swap happens.
