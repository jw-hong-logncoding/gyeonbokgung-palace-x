import { db } from '../firebase';
import { doc, getDoc, getDocs, collection, setDoc } from "firebase/firestore";


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
  
export async function addReview(reviewData) {
  
  // 새 문서 참조 생성
  const docRef = doc(collection(db, "reviews"));
  // 문서 참조에 데이터 쓰기
  await setDoc(docRef, reviewData);
  // 새로 추가된 문서의 ID와 데이터 반환
  return { id: docRef.id, ...reviewData };
}