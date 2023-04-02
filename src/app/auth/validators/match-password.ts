import { Injectable } from '@angular/core';

import { AbstractControl, FormGroup, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";


@Injectable({providedIn:"root"})
export class MatchPassword implements Validator {

validate(control: AbstractControl): ValidationErrors | null {
  if (control instanceof FormGroup) {
    const {password ,passwordConfirmation } = control.value
    // console.log(password ,passwordConfirmation )
    return password === passwordConfirmation ? null : { passwordMismatch: true };
  }
  return null;

}}



// export function MatchPassword(): ValidatorFn {

//   return (control: AbstractControl): ValidationErrors | null => {
//     if(control.value['password'] === control.value['passwordConfirmation']){
//           return null
//         }else{
//           return {passwordsDontMatch:true}
//         }
//   };



// }

// export class MatchPassword implements Validator {

// validate(formGroup : FormGroup) {
//  const {password , passwordConfirmation} = formGroup.value
//   if(password === passwordConfirmation){
//     return null
//   }else{
//     return {passwordsDontMatch:true}
//   }

// }


// export function MatchPassword(control: AbstractControl): ValidationErrors | null {
//   if (control instanceof FormGroup) {
//     const password = control.get('password')?.value;
//     const confirmPassword = control.get('passwordConfirmation')?.value;
//     return password === confirmPassword ? null : { passwordMismatch: true };
//   }
//   return null;
// }

// @Injectable({providedIn:"root"})

// export class MatchPassword implements Validator {

// validate():ValidatorFn {
//   return(control: AbstractControl) :ValidationErrors | null  =>{
// console.log(2)
//       if(control.value['password'] === control.value['passwordConfirmation']){
//           return null
//         }else{
//           return {passwordsDontMatch:true}
//         }
//   }


// }
// }
