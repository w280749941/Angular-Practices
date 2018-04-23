import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Observable<any>;

  constructor(private http: Http) {

  const myHeaders: Headers = new Headers();
  myHeaders.append('Authorization', 'Basic 12345');

  this.products = this.http.get('/api/products', {headers: myHeaders})
    .map((res) => res.json());
  }

  ngOnInit() {
  }

  // The following is one way
  // dataSource: Observable<any>;

  // products: any[] = [];

  // constructor(private http: Http) {
  //   this.dataSource = this.http.get('/api/products')
  //     .map((res) => res.json());
  // }

  // ngOnInit() {
  //   // Not above get method starts http request, it's the following.
  //   this.dataSource.subscribe(
  //     data => this.products = data
  //   );
  // }

}
