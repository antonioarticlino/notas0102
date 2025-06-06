
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxU6EtWfDvGVk4hJTfS71VXgRR48YRtIE",
  authDomain: "notas-c73e7.firebaseapp.com",
  databaseURL: "https://notas-c73e7-default-rtdb.firebaseio.com",
  projectId: "notas-c73e7",
  storageBucket: "notas-c73e7.appspot.com",
  messagingSenderId: "1097503059717",
  appId: "1:1097503059717:web:145739fe1ca367312b116c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };
