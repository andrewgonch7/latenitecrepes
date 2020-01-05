import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/item.service';
import { Item } from 'src/item.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() item: Item;

  menuItem: Item = new Item();
  submitted = false;
  items: any;

  menu: any;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItemsList();
    this.getMenuList();
  }

  getMenuList = () => {
    this.itemService.getMenuList().subscribe(res => (this.menu = res));
    console.log(this.menu);
  }

  getItemsList() {
    this.itemService.getItemsList().snapshotChanges().pipe(
      map(changes => 
        changes.map(i =>
          ({ name: i.payload.doc.id, ...i.payload.doc.data() })
        )
      )
    ).subscribe(items => {
      this.items = items;
    });
    console.log(this.items);
  }
  
  newItem(): void {
    this.submitted = false;
    this.menuItem = new Item();
  }

  save() {
    this.itemService.createItem(this.menuItem);
    this.menuItem = new Item();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  updateName(newName: string) {
    this.itemService
      .updateItem(this.item.name, { name: newName})
      .catch(err => console.log(err));
  }

  deleteItem() {
    this.itemService
      .deleteItem(this.item.name)
      .catch(err => console.log(err));
  }

  deleteItems() {
    this.itemService.deleteAll();
  }

}
