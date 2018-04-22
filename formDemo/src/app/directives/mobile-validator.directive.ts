import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { mobileValidator } from '../validator/validators';


// use validator service in the template form.
// multi: true because in equal-validator we also have NG_VALIDATORS. so there are multiple values associate to the same token.
@Directive({
  selector: '[appMobile]',
  providers: [{provide: NG_VALIDATORS, useValue: mobileValidator, multi: true}]
})
export class MobileValidatorDirective {

  constructor() { }

}
