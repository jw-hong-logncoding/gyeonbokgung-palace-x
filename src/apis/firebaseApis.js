import { db } from '../firebase';
import { doc, getDoc, getDocs, collection, setDoc, runTransaction, query, where } from "firebase/firestore";
import { loadFromLocalStorage } from '../functions/localStorageFunctions';
import { LOCAL_STORAGE_KEYS } from '../enums';

export async function fetchReviewById(id) {
  console.log(id);
  const docRef = doc(db, "reviews", id);
  const docSnapshot = await getDoc(docRef);

  if (!docSnapshot.exists()) {
    console.log("No document found with the given ID.");
    return null;
  }

  const document = {
    id: docSnapshot.id,
    ...docSnapshot.data()
  };

  console.log(document);
  return document;
}

export async function fetchAllReviews() {
  const collectionRef = collection(db, "reviews");
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

export async function fetchMyReviewsByUserId() {
  const data = loadFromLocalStorage(LOCAL_STORAGE_KEYS.USER);
  const collectionRef = collection(db, "reviews");
  const q = await query(collectionRef, where("userId", "==", data.uid));
  const snapshot = await getDocs(q);

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
  try {
    const res = await runTransaction(db, async (transaction) => {
      const docBuildingsRef = doc(db, "buildings", reviewData.buildingId);
      const docReviewsRef = doc(collection(db, "reviews"));
      console.log(docReviewsRef)

      const docSnap = await transaction.get(docBuildingsRef);

      await transaction.set(docReviewsRef, reviewData);

      // building type이 존재할경우
      if (!docSnap.exists()) {
        const keywordObject = {};
        reviewData.keywords.forEach(k => {
          keywordObject[k] = 1;
        });
        await transaction.set(docBuildingsRef, {keywords: keywordObject})
      } else {
        const foundKeywords = docSnap.data().keywords;
        reviewData.keywords.forEach(k => {
          if (Object.prototype.hasOwnProperty.call(foundKeywords, k)) {
            foundKeywords[k]++;
          } else {
            foundKeywords[k] = 1;
          }
        })
        await transaction.update(docBuildingsRef, { keywords: foundKeywords});
      }
      return { id: docReviewsRef.id, ...reviewData };
    });
    console.log("Transaction successfully committed!");
    return res;
  } catch (e) {
    console.error("Transaction failed: ", e);
  }
}