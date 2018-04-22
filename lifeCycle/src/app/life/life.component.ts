import { Component, OnInit, OnChanges, AfterContentChecked, AfterContentInit,
  AfterViewInit, AfterViewChecked, DoCheck, OnDestroy, SimpleChange, Input, SimpleChanges } from '@angular/core';

let logIndex = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  @Input()
  name: string;

  logIt(msg: string) {
    console.log(`#${logIndex++} ${msg}`);
  }

  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }
  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }
  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    const name = changes['name'].currentValue;
    this.logIt('Name attribute value in ngOnChanges is: ' + name);
  }
  constructor() {
    this.logIt('Name attribute value in constructor is: ' + name);
   }

  ngOnInit() {
    this.logIt('ngOnInit');
  }

}
