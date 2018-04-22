import { Component, OnInit, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
// export class ChildComponent implements OnInit, AfterContentInit, AfterContentChecked {
//   constructor() { }
//   ngOnInit() {
//   }
//   ngAfterContentInit(): void {
//     console.log('Child component projection Content Init');
//   }
//   ngAfterContentChecked(): void {
//     console.log('Child component projection Content checked');
//   }
// }

export class ChildComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log('Child 1 is being destroyed');
  }
}
