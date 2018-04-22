import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { mobileValidator, equalValidator, mobileAsyncValidator } from '../validator/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  // // Validator
  // xxxxx(control: AbstractControl): {[key: string]: any} {
  //   return null;
  // }

  formModel: FormGroup;

  // // Mobile phone validator
  // mobileValidator(control: FormControl): any {
  //   const myreg = /^(((13[0-9]{1})|(15(0-9){1})|(18[0-9]{1}))+\d{8})$/;
  //   const valid = myreg.test(control.value);
  //   console.log('mobile validation result: ' + valid);
  //   return valid ? null : {mobile: true};
  // }

  // // Validator for password and password confirm
  // equalValidator(group: FormGroup): any {
  //   const password: FormControl = group.get('password') as FormControl;
  //   const pconfirm: FormControl = group.get('pconfirm') as FormControl;
  //   const valid: boolean = (password.value === pconfirm.value);
  //   console.log('Password result: ' + valid);
  //   return valid ? null : {equal: true};
  // }

  // The form builder way.
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validator: equalValidator})
    });
  }

  // Regular reactive form
  // constructor() {
  //   this.formModel = new FormGroup({
  //     username: new FormControl(),
  //     mobile: new FormControl(),
  //     passwordsGroup: new FormGroup({
  //       password: new FormControl(),
  //       pconfirm: new FormControl()
  //     })
  //   });
  // }

  ngOnInit() {
  }

  onSubmit() {
    // const isValid: boolean = this.formModel.get('username').valid;
    // console.log('Useranme validation: ' + isValid);
    // const erros: any = this.formModel.get('username').errors;
    // console.log('Username error msg: ' + JSON.stringify(erros, null, 2));

    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}
