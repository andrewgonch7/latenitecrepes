import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quantity-page',
  templateUrl: './quantity-page.component.html',
  styleUrls: ['./quantity-page.component.css']
})
export class QuantityPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
