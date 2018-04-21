import { Component, OnInit, Injector } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { AnotherProductService } from '../shared/another-product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  // providers: [{
  //   provide: ProductService, useClass: AnotherProductService
  // }] // This only available to this class & subclass. This also overrides the provider in application level.
})
export class Product2Component implements OnInit {

  product: Product;

  private productService: ProductService;

  // Manaul injection not recommended
  constructor(private injector: Injector) {
    this.productService = injector.get(ProductService);
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }
  // Previous code Automatically injection
  // product: Product;

  // constructor(private productService: ProductService) { }

  // ngOnInit() {
  //   this.product = this.productService.getProduct();
  // }
}
