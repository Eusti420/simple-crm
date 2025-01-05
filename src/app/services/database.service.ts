import { Injectable, inject } from '@angular/core';
import { 
  Firestore, 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc 
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private firestore: Firestore = inject(Firestore);

  // Dokument zur Collection hinzufügen
  async addData(collectionName: string, data: any) {
    try {
      const docRef = await addDoc(collection(this.firestore, collectionName), data);
      console.log("Document written with ID: ", docRef.id);
      return docRef;
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  }

  // Alle Dokumente einer Collection lesen
  async getData(collectionName: string) {
    try {
      const querySnapshot = await getDocs(collection(this.firestore, collectionName));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (e) {
      console.error("Error getting documents: ", e);
      throw e;
    }
  }

  // Dokument aktualisieren
  async updateData(collectionName: string, docId: string, data: any) {
    try {
      const docRef = doc(this.firestore, collectionName, docId);
      await updateDoc(docRef, data);
    } catch (e) {
      console.error("Error updating document: ", e);
      throw e;
    }
  }

  // Dokument löschen
  async deleteData(collectionName: string, docId: string) {
    try {
      const docRef = doc(this.firestore, collectionName, docId);
      await deleteDoc(docRef);
    } catch (e) {
      console.error("Error deleting document: ", e);
      throw e;
    }
  }
}