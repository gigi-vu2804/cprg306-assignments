import { db } from "../_utils/firebase";
import {
  doc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  query,
} from "firebase/firestore";

export async function getItems(userId, updateItemsList) {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const itemsQuery = query(itemsCollectionRef);
    const itemsSnapshot = await getDocs(itemsQuery);
    let itemsList = [];
    itemsSnapshot.forEach((doc) => {
      let thisItem = { id: doc.id, ...doc.data() };
      itemsList.push(thisItem);
    });
    // update itemsList when new items are added
    updateItemsList(itemsList);
  } catch (error) {
    console.log(error);
  }
}

export async function addItem(userId, itemObj) {
  try {
    const newItemRef = collection(db, "users", userId, "items");
    const newItemPromise = await addDoc(newItemRef, itemObj);
    console.log(`Added item with ID: ${newItemPromise.id}`);
  } catch (error) {
    console.log(error);
  }
}

export async function removeItem(userId, itemId) {
  try {
    const itemRef = doc(db, "users", userId, "items", itemId);
    await deleteDoc(itemRef);
    console.log(`Removed item with ID: ${itemId}`);
  } catch (error) {
    console.log(error);
  }
}
