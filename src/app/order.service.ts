import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Order } from 'src/app/order.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private dbPath = '/Order';

  ordersRef: AngularFirestoreCollection<Order> = null;

  constructor(private db: AngularFirestore) {
    this.ordersRef = db.collection(this.dbPath);
  }

  createOrder(order: Order) {
    const orderRef = this.db.collection('Order');
    orderRef.add({...order}).then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    }).catch(function(error) {
      console.error('Error adding document: ', error);
    });
  }
}
