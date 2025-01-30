import { Firestore, collection, addDoc, Timestamp } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Deal } from '../../models/deal.class';

@Injectable({
  providedIn: 'root',
})
export class DealService {
  constructor(private firestore: Firestore) {}

  async addDeal(deal: Deal) {
    try {
      const dealsCollection = collection(this.firestore, 'deals');
      const dealData = {
        ...deal,
        createdAt: Timestamp.fromDate(deal.createdAt),
      };
      await addDoc(dealsCollection, dealData);
      console.log('Deal erfolgreich gespeichert:', deal);
    } catch (error) {
      console.error('Fehler beim Speichern des Deals:', error);
    }
  }
}
