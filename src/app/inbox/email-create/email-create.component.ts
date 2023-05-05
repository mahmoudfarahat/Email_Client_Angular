import { EmailService } from './../email.service';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  showModal =false
  email : Email
  constructor(private authService: AuthService, private emailService:EmailService) {
    this.email = {
      id:'',
      to:'',
      subject:'',
      html:'',
      text:'',
      from: `${authService.username}@angular-email.com`
  }
  }

  ngOnInit(): void {
  }

  onSubmit(email:any){
    console.log(2)

    console.log(email)
    this.emailService.sendEmail(email).subscribe((a)=>{
      console.log(a)
      this.showModal= false
    })
  }

}
