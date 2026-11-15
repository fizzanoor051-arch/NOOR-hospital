# NOOR Health & Medical Center

React + Vite hospital website with 3D CSS visuals (no extra 3D library needed).

## Run
```
npm install
npm run dev
```
Build: `npm run build` (SPA redirects for Netlify/Vercel are included: `public/_redirects`, `vercel.json`).

## Edit your real details
`src/data/site.js` has the phone numbers, WhatsApp number, emails and address. Replace the sample values.
Doctors, departments, medicines, tests: `src/data/*.js` (doctor names are sample data).

## Pages
/ · /departments · /departments/:slug (37) · /doctors · /doctors/:id (66) · /appointment · /emergency
/facilities · /facilities/pharmacy · laboratory · blood-bank · icu · operation-theatre · hospital · /about · /contact
