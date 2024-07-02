import { db } from '../firebase';
import { doc, getDoc, getDocs, collection, runTransaction, query, where, updateDoc } from "firebase/firestore";
import { loadFromLocalStorage } from '../functions/localStorageFunctions';
import { LOCAL_STORAGE_KEYS } from '../enums';


export async function fetchAllBuildingInfo() {
  const collectionRef = collection(db, "buildings");
  const snapshot = await getDocs(collectionRef);

  if (snapshot.empty) {
    console.log("No document found");
    return null;
  }

  const documents = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return documents;
}

export async function fetchReviewById(id) {
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

export async function updateReviewById(reviewId, content) {
  const reviewRef = doc(db, 'reviews', reviewId);
    await updateDoc(reviewRef, {
      review: content
    });
}

export async function updateLike({ userId, reviewId, isLike, buildingId }) {
  await runTransaction(db, async (transaction) => {
    const userDocRef = doc(db, "users", userId);
    const reviewDocRef = doc(db, "reviews", reviewId);
    const buildingDocRef = doc(db, "buildings", buildingId);

    // 현재 문서 상태 읽기
    // const userDoc = await transaction.get(userDocRef);
    const reviewDoc = await transaction.get(reviewDocRef);

    if (!reviewDoc.exists()) {
      throw new Error("Document does not exist!");
    }

    // 문서 업데이트
    transaction.set(userDocRef, { likes: { [reviewId]: isLike } }, { merge: true });
    transaction.set(reviewDocRef, { likes: { [userId]: isLike } }, { merge: true });
    transaction.set(buildingDocRef, { likes: { [userId]: isLike } }, { merge: true });
  });
}
  
export async function addReview(reviewData) {
  try {
    const res = await runTransaction(db, async (transaction) => {
      const docBuildingsRef = doc(db, "buildings", reviewData.buildingId);
      const docReviewsRef = doc(collection(db, "reviews"));

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