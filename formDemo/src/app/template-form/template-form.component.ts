import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usernameValid = true;
  usernameUntouched = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any, valid: boolean) {
    console.log(valid);
    console.log(value);
  }

  onMobileInput(form: NgForm) {
    if (form) {
      this.usernameValid = form.form.get('username').valid;
      this.usernameUntouched = form.form.get('username').untouched;
    }
  }
}
