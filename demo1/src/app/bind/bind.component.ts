import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
// import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  birthday: Date = new Date();

  pi = 3.1415926;

  size = 7;

  constructor() {

  }

  ngOnInit() {
  }

/*
  searchInput: FormControl = new FormControl();

  constructor() {
    // Call getStockInfo only when there isn't any input within 500 ms.
    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe(stockCode => this.getStockInfo(stockCode));
    // Observable.from([1, 2, 3, 4])
    //   .filter( e => e % 2 === 0)
    //   .map( e => e * e )
    //   .subscribe(
    //     e => console.log(e),
    //     err => console.error(err),
    //     () => console.log('Done')
    //   );
  }

  ngOnInit() {

  }

  getStockInfo(value: string) {
    console.log(value);
  }
*/
  // onKey(value: string) {
  //   console.log(value);
  // }
  // onKey(event) {
  //   console.log(event.target.value);
  // }

  // imgUrl = 'http://placehold.it/400x220';

  // size = 2;

  // divClass: string;

  // isBig = false;

  // divClass: any = {
  //   a: false,
  //   b: false,
  //   c: false
  // };

  // isDev = true;

  // divStyle: any = {
  //   color: 'red',
  //   background: 'yellow'
  // };

  // name: string;

  // constructor() {
  //   setTimeout(() => {
  //     this.name = 'TOM';
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   this.divStyle = {
  //   //     color: 'yellow',
  //   //     background: 'red'
  //   //   };
  //   // }, 3000);
  //   // setTimeout(() => {
  //   //   this.isDev = false;
  //   // }, 3000);
  //   // setTimeout(() => {
  //   //   this.divClass = {
  //   //     a: true,
  //   //     b: true,
  //   //     c: true
  //   //   };
  //   // }, 3000);
  //   // setTimeout(() => {
  //   //   this.isBig = true;
  //   // }, 3000);
  //   // setTimeout(() => {
  //   //   this.divClass = 'a b c';
  //   // }, 3000);
  // }

  // ngOnInit() {
  // }

  // doOnClick(event: any) {
  //   console.log(event);
  // }

  // // HTML value doesn't change while dom value changes.
  // doOnInput(event: any) {
  //   console.log(event.target.value); // Dom value
  //   console.log(event.target.getAttribute('value')); // HTML value
  // }

  // doOnInput(event) {
  //   this.name = event.target.value;
  // }
}
