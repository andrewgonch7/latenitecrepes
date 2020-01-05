import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Item } from 'src/item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private dbPath = '/Menu';

  itemsRef: AngularFirestoreCollection<Item> = null;

  constructor(private db: AngularFirestore) {
    this.itemsRef = db.collection(this.dbPath);
  }

  getItemsList(): AngularFirestoreCollection<Item> {
    return this.itemsRef;
  }

  createItem(item: Item): void {
    this.itemsRef.add({...item});
  }

  updateItem(key: string, value: any): Promise<void> {
    return this.itemsRef.doc(key).update(value);
  }

  deleteItem(key: string): Promise<void> {
    return this.itemsRef.doc(key).delete();
  }

  deleteAll() {
    this.itemsRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        })
      },
      error => {
        console.log('Error: ', error);
      });
  }

  getMenuList() {
    var menuRef = this.db.collection("Menu");

    menuRef.doc("strawberryCrepe").set({
      name: "Strawberry Crepe",
      price: 3.99,
      id: 1,
    }).then(function() {
      console.log("Document successfully written!");
    }).catch(function(error) {
      console.error("Error writing document: ", error);
    });

    const exampleData = {
      name: "Vanilla Crepe",
      price: 3.99,
      id: 2
    };

    menuRef.add(exampleData);

    const strawberryRef = this.db.collection('Menu').doc('strawberryCrepe');
    // tslint:disable-next-line: only-arrow-functions
    strawberryRef.get()
      .subscribe(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          console.log("No such document!");
        }
      });
    /*
    var strawberryRef = this.db.collection("Menu").doc("strawberryCrepe");
    strawberryRef.get().then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // undefined
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
    */

    console.log(menuRef);
    return this.db.collection("Menu").snapshotChanges();
  }

}
