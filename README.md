# Car Dealership

A car dealership web app — public listing site + CRM — built as a learning project to
practice backend development with **Node.js**, **Express**, and **MongoDB**.

I'm a frontend developer by trade (and a petrolhead by passion 🏎️), so this repo exists
mainly to get comfortable on the other side of the stack: REST APIs, auth, and working
with a database.

## Status

| Part | Status |
| --- | --- |
| `frontend/` | Working — React + Vite, currently backed by mock data |
| `backend/` | Not started yet |

The frontend never talks to mock data directly — pages only call `src/api/cars.js` and
`src/api/auth.js`. Once the backend exists, those two files get pointed at the real API
and no page code has to change. See [`frontend/README.md`](./frontend/README.md) for details.

## Stack

- **Frontend**: React 19, Vite, React Router, Tailwind CSS
- **Backend** (planned): Node.js, Express, MongoDB

## Structure

```
car-dealership/
├── frontend/   # public listings + CRM (mocked data for now)
└── backend/    # REST API (WIP)
```

## Running the frontend

```bash
cd frontend
npm install
npm run dev
```
