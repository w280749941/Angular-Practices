import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log('Hello ' + name);
  }

  ngAfterViewInit(): void {
    console.log('Child component initialization');
  }
  ngAfterViewChecked(): void {
    console.log('Child component checking');
  }
}
