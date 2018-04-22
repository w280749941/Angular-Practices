import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  greeting: string;

  @Input()
  user: { name: string};

  message = 'Initialize msg';

  oldUsername: string;

  changeDetected = false;

  noChangeCount = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

  // By default, only immutable variable changed OnChanges will be called.
  // Object value changes doesn't activate OnCchanges method.
  // This method will monitor object value changes and act correspondinglly.
  // However, mouse click input box to focus will also call this method
  ngDoCheck(): void {
    if (this.user.name !== this.oldUsername) {
      this.changeDetected = true;
      console.log('DoCheck:user.name from ' + this.oldUsername + ' To ' + this.user.name );
      this.oldUsername = this.user.name;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      this.noChangeCount = this.noChangeCount + 1;
      console.log('DoCheck: user.name has no changes, ngDoCheck method already being called (' + this.noChangeCount + ') times');
    }

    this.changeDetected = false;
  }
}
