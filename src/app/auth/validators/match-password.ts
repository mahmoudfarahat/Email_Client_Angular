
import { AbstractControl, FormGroup, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";






export function MatchPassword(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    if(control.value['password'] === control.value['passwordConfirmation']){
          return null
        }else{
          return {passwordsDontMatch:true}
        }
  };



}

// export class MatchPassword implements Validator {

// validate(formGroup : FormGroup) {
//  const {password , passwordConfirmation} = formGroup.value
//   if(password === passwordConfirmation){
//     return null
//   }else{
//     return {passwordsDontMatch:true}
//   }

// }

