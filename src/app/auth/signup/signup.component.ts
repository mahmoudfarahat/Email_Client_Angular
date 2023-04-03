import { AuthService } from './../auth.service';
import { AsyncUnique } from './../validators/async-unique';
 import {  MatchPassword } from './../validators/match-password';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  authForm :FormGroup | any
  constructor(private matchPassword:MatchPassword , private asyncUnique:AsyncUnique  , private authservice:AuthService) {

   }



  ngOnInit(): void {
      this.authForm = new FormGroup({
      username:new FormControl('', [Validators.required ,Validators.minLength(3),Validators.maxLength(20), Validators.pattern(/^[a-z0-9]+$/)],
          [this.asyncUnique.validate]
         ),
      password:new FormControl('' ,[Validators.required , Validators.minLength(4),Validators.maxLength(20)]),
      passwordConfirmation: new FormControl('', [Validators.required ,Validators.minLength(4),Validators.maxLength(20)])
      },
      // MatchPassword
       {validators:[this.matchPassword.validate]}
       )
  }
  onSubmit(){

    if(this.authForm.invalid){
      return;
    }
    this.authservice.signup(this.authForm.value).subscribe((response)=>{
      console.log(response)
    })

  }

}
