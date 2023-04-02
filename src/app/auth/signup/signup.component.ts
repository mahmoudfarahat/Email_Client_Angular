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

authForm = new FormGroup({
  username:new FormControl('',
   [Validators.required ,Validators.minLength(3),Validators.maxLength(20), Validators.pattern(/^[a-z0-9]+$/)],
    [this.asyncUnique.validate]
   ),
password:new FormControl('' ,[Validators.required , Validators.minLength(4),Validators.maxLength(20)]),
passwordConfirmation: new FormControl('', [Validators.required ,Validators.minLength(4),Validators.maxLength(20)])
},
// MatchPassword
 {validators:[this.matchPassword.validate]}

 )
  constructor(private matchPassword:MatchPassword , private asyncUnique:AsyncUnique ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.authForm.value)
  }

}
