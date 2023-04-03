import { AuthService } from './../auth.service';
import { AbstractControl, AsyncValidator, FormControl, FormGroup, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core";


@Injectable({providedIn:"root"})
export class AsyncUnique implements AsyncValidator{

  constructor(private authService:AuthService){
    // AbstractControl<any, any>
  }

  validate = (control:AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

    const {value } = control
     return  this.authService.usernameAvailable(value)
        .pipe(
          map((value) =>{
            if(value.available){
              return null
            }
            return null
          }),
          catchError((err)=>{
            if(err.error.username){
              return of({nonUniqueUsername:true})
            }else{
              return of({noConnection:true})

            }
        })
        )



  }



  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error("Method not implemented.");
  // }



}
