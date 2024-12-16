
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyDvw0xbOWpTUeseIQcnYoBvMN43ZvCs21w",
  authDomain: "vanlife2024-87f6b.firebaseapp.com",
  projectId: "vanlife2024-87f6b",
  storageBucket: "vanlife2024-87f6b.firebasestorage.app",
  messagingSenderId: "64928127303",
  appId: "1:64928127303:web:74957b76b78e9df4a0d462",
  measurementId: "G-XGYMF7Z8KN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
    
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}


export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "789"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr

}

export async function loginUser(creds) {
    const res = await fetch("/api/login",{
        method: "post",
        body: JSON.stringify(creds)
    }
    )
    const data = await res.json()

    if(!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    return data
}
