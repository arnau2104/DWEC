import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore,addDoc,setDoc,collection,doc,onSnapshot,getDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
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

  export const agafarExerciciPerId = async (id) => {
    try {
      const referenciaDoc = doc(db, "exercicis", id); // Referencia al documento
      const docSnap = await getDoc(referenciaDoc); // Obtiene los datos
  
      if (docSnap.exists()) {
        return [docSnap.id,docSnap.data()]; // Devuelve los datos del documento
      } else {
        throw new Error("El ítem no existe.");
      }
    } catch (error) {
      console.error("Error al obtener el ítem:", error);
      throw error; // Relanza el error para manejarlo externamente
    }
  };