import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDic4ayEiUmi5bhtNjOHUhJ7hpTiHg4V8w",
  authDomain: "todo-vue-77fd3.firebaseapp.com",
  databaseURL: "https://todo-vue-77fd3.firebaseio.com",
  projectId: "todo-vue-77fd3",
  storageBucket: "todo-vue-77fd3.appspot.com",
  messagingSenderId: "898067332345",
  appId: "1:898067332345:web:64f84d34c1280fa4397628",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;
