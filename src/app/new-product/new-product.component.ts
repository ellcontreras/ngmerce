import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  name = '';
  category = 'tech';
  price = '';
  description = '';

  constructor() { }

  ngOnInit() {
  }

  publish () {
    console.log(this.name, this.category, this.price, this.description);
  }

}
