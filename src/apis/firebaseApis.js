import { db } from '../firebase';
import { doc, getDoc, getDocs,  collection } from "firebase/firestore";


export async function fetchPosts() {
    const collectionRef = collection(db, "posts");
    const snapshot = await getDocs(collectionRef);
  
    if (snapshot.empty) {
      console.log("No documents found in the collection.");
      return [];
    }
  
    const documents = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  
    console.log(documents);
    return documents;
}
 
export async function fetchPostById(postId) {
    const docRef = doc(db, "posts", postId);
    const snapshot = await getDoc(docRef);
  
    if (!snapshot.exists()) {
      console.log("No document found in the collection.");
      return null;
    }
    return snapshot.data();
}
  