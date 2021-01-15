import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

const fireConfig = {
	apiKey: "AIzaSyDBI0SkUGQgvkeGee45eRws3MQm2PIxOOQ",
	authDomain: "rrf-template.firebaseapp.com",
	projectId: "rrf-template",
	storageBucket: "rrf-template.appspot.com",
	messagingSenderId: "70058089797",
	appId: "1:70058089797:web:d3060222106a87f4caf22c",
};

const fireApp = firebase.initializeApp(fireConfig);

// db
const db = fireApp.firestore();
const storage = fireApp.storage();

export { db, storage };
