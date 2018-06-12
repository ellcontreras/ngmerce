import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() price: number;
  constructor() { }

  ngOnInit() {
  }

}
