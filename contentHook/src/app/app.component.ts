import { Component, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit, AfterContentChecked, AfterViewInit {

  title = 'app';

  message = 'Bye';

  // Immutable variable can be changed in contentInit method but not recommended in viewInit Method
  ngAfterContentInit(): void {
    console.log('Parent component projection content initialization');
    this.message = 'Hello World';
  }
  ngAfterContentChecked(): void {
    console.log('Parent component projection content Checked');
  }
  ngAfterViewInit(): void {
    console.log('Parent component projection View Init');
  }

  // divContent = '<div>Web Page</div>';
}
