import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore,addDoc,setDoc,collection,doc,onSnapshot } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL2Tjr4xrmUvHnVfdv4f9CCXoI3c8Kva4",
  authDomain: "crud-bcab3.firebaseapp.com",
  projectId: "crud-bcab3",
  storageBucket: "crud-bcab3.firebasestorage.app",
  messagingSenderId: "13241962771",
  appId: "1:13241962771:web:ab536d9094fd92a1fb4ae6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const guardarExercici = (nom,muscolTreballat,series,autor) => {
    addDoc(collection(db,"exercicis"), {nom,muscolTreballat,series,autor});
}

export const guardarExerciciAmbId = async (id,nom,muscolTreballat,series,autor) => {
    try {
      await setDoc(doc(db, "exercicis", id), {
        nom,
        muscolTreballat,
        series,
        autor
      });
      console.log("Task saved with custom ID:", id);
    } catch(error) {
      console.log("error saving task with custom ID:", error)
    }
  }

  export {
    onSnapshot,collection,db
  }

  export const  agafarExerciciPerId = (id)=> {
    return db.collection('exercicis').doc(id).get()
      .then((doc) => {
        if (doc.exists) {
          return doc.data(); // Devuelves los datos del item
        } else {
          throw new Error("El item no existe.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el item:", error);
        throw error; // Lanzamos el error para manejarlo más arriba si es necesario
      });
  }