import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/restaurant')
      .valueChanges();
  }
  title = 'late-nite-crepes';
}
