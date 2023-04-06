import "./App.css";
// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCfBIh_5bm0SPavjYjX1pkmZMQ4lAUFbkI",
    authDomain: "my-first-project-47c84.firebaseapp.com",
    projectId: "my-first-project-47c84",
    storageBucket: "my-first-project-47c84.appspot.com",
    messagingSenderId: "934614930415",
    appId: "1:934614930415:web:7e1f1f04b8da923d165c1a",
    measurementId: "G-TDEV64ZNEP",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics =
  getAnalytics(app);

  return (
    <div className="App">
      <h1>Kedar Vyas</h1>
      <h2>Jai Shree Ram</h2>
      <h2>Jai Shree Ram</h2>
      <h2>Jai Shree Ram</h2>
    </div>
  );
}

export default App;
