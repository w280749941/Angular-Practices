import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  message: string;

  @ViewChild('child1')
  child1: ChildComponent;

  constructor() {}

  // Calling child's method.
  ngOnInit(): void {
    setInterval(() => {
      this.child1.greeting('Tom');
    }, 3000);
  }

  // Try not to change immutable variable in view Hooks.
  ngAfterViewInit(): void {
    // this.message = 'Hello'; // This throws error, need to do it in the following timeout way.
    setTimeout(() => {
      this.message = 'Hello';
    }, 0);
    console.log('Parent component initialization');
  }
  ngAfterViewChecked(): void {
    console.log('Parent component checking');

  }

}
