import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable() // This means other services can be injected into this class.
export class ProductService {
  constructor(public logger: LoggerService) { }

  getProduct(): Product {
    this.logger.log('Get Product Calling');
    return new Product(0, 'iPhoneX', 6000, 'iPhone product');
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {

  }
}
