import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  greeting = 'Hello';

  user: {name: string} = {name: 'Tom'};

  title = 'Tom';
}
