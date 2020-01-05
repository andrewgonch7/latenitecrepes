import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/order.service';
import { Order } from 'src/app/order.model';
import { ItemDetails } from 'src/app/order.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  order: Order = new Order();
  itemDetails: ItemDetails = new ItemDetails();

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.order.item = new Array<ItemDetails>();
  }

  newOrder() {
    this.order.item.push(this.itemDetails);
    const customObj = this.order.item.map((obj: any) => {
      return Object.assign({}, obj);
    });
    this.order.item = customObj;

    this.order.time_created = firebase.firestore.FieldValue.serverTimestamp(),
    this.order.status = 'Cooking';
    this.orderService.createOrder(this.order);
    this.order = new Order();
  }

}
