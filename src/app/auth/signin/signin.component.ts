import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  authForm:FormGroup = new FormGroup({
    username : new FormControl('',[Validators.required ,Validators.minLength(3),Validators.maxLength(20), Validators.pattern(/^[a-z0-9]+$/)]),
    password : new FormControl('',[Validators.required , Validators.minLength(4),Validators.maxLength(20)])

  })

  onSubmit(){
    if(this.authForm.invalid){
      return;
    }

    this.authService.sigin(this.authForm.value).subscribe({
next:(value) =>{
  this.router.navigateByUrl('/inbox')
},
error:({error})=>{
    console.log(error)
    if(error.username || error.password){
      this.authForm.setErrors({credentials:true})
    }
}
    }

    )

 }


}
