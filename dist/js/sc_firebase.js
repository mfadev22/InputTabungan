import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDmYv6S7JsukJGECykFEgn-ouBXIp0EwOY",
  authDomain: "yukmenabung-8aa6c.firebaseapp.com",
  projectId: "yukmenabung-8aa6c",
  storageBucket: "yukmenabung-8aa6c.appspot.com",
  messagingSenderId: "1013500774036",
  appId: "1:1013500774036:web:214c1ad8d5f8746a2a1681",
  measurementId: "G-WCBK3DX0PW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the database
// Get a reference to the database
const database = getDatabase();
// const database = getDatabase("https://yukmenabung-8aa6c-default-rtdb.asia-southeast1.firebasedatabase.app");

// Get data from a specific path in the database
const getData = async (path) => {
  const dataRef = ref(database, path);
  const snapshot = await get(dataRef);
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
};

// Usage: Pass the path to the data you want to retrieve
getData("/user");
