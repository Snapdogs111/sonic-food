
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

import { getDatabase } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDdKdvTzCtYoarZhdG1P5RiOLAzjaTK0pI",
  authDomain: "sonic-food.firebaseapp.com",
  databaseURL: "https://sonic-food-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "sonic-food",
  storageBucket: "sonic-food.firebasestorage.app",
  messagingSenderId: "959643106746",
  appId: "1:959643106746:web:917ca89cca41fa2c48b183",
  measurementId: "G-FH0336F1HH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export { app };
