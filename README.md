# Application Form 😎

### Latest and greatest Technologies

1. [Vue 3](https://v3.vuejs.org/)
1. [Firebase v9](https://firebase.google.com/docs/web/modular-upgrade)
1. [Tailwind CSS v3](https://tailwindcss.com/)
1. [Font Awesome](https://github.com/FortAwesome/vue-fontawesome)
1. [Headless UI](https://headlessui.dev/)
1. [Vite](https://vitejs.dev/guide/)

Go to Firebase console. Add Project. In project overview, click on the web icon and register the app. You will see `firebaseConfig object`, We will require its details further. Click on Authetication, then on set up sign-in method. Enable `Email/password authentication` & `google authentication`.

Create a `.env.local` file in your project's root. Example of `.env.local` file is given below. Make sure you replace `YOUR_FIREBASE_CONSOLE_DETAILS` with your `firebaseConfig object` details.
  ```
  APP_API_KEY=YOUR_FIREBASE_CONSOLE_DETAILS
  APP_AUTH_DOMAIN=YOUR_FIREBASE_CONSOLE_DETAILS
  APP_DATABASE_URL=YOUR_FIREBASE_CONSOLE_DETAILS
  APP_PROJECT_ID=YOUR_FIREBASE_CONSOLE_DETAILS
  APP_STORAGE_BUCKET=YOUR_FIREBASE_CONSOLE_DETAILS
  APP_MESSAGING_SENDER_ID=YOUR_FIREBASE_CONSOLE_DETAILS
  APP_APP_ID=YOUR_FIREBASE_CONSOLE_DETAILS
  APP_MEASUREMENT_ID=YOUR_FIREBASE_CONSOLE_DETAILS
  ```