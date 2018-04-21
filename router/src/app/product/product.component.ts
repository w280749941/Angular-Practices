import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: number;
  private productName: string;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // This solves Product object being called by an exiting product object, hence productId won't be updated in the template.
    this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);
    // this.productId = this.routeInfo.snapshot.queryParams['id']; // This is for query parameter
    // this.productId = this.routeInfo.snapshot.params['id']; // This is for path parameter
    this.routeInfo.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
  }
}
export class Product {
  constructor(public id: number, public name: string) {
  }
}
