import { FormControl, FormGroup } from '@angular/forms';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

// Mobile phone validator
export function mobileValidator(control: FormControl): any {
    const myreg = /^(((13[0-9]{1})|(15(0-9){1})|(18[0-9]{1}))+\d{8})$/;
    const valid = myreg.test(control.value);
    console.log('mobile validation result: ' + valid);
    return valid ? null : {mobile: true};
}

// Mobile phone validator Async
export function mobileAsyncValidator(control: FormControl): any {
    const myreg = /^(((13[0-9]{1})|(15(0-9){1})|(18[0-9]{1}))+\d{8})$/;
    const valid = myreg.test(control.value);
    console.log('mobile validation result: ' + valid);
    return Observable.of(valid ? null : {mobile: true}).delay(5000);
}

// Validator for password and password confirm
export function equalValidator(group: FormGroup): any {
    const password: FormControl = group.get('password') as FormControl;
    const pconfirm: FormControl = group.get('pconfirm') as FormControl;
    const valid: boolean = (password.value === pconfirm.value);
    console.log('Password result: ' + valid);
    return valid ? null : {equal: {descxxx: 'Password validation failed'}};
}
