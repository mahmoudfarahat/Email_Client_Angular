import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private authService:AuthService , private router:Router) { }

  ngOnInit(): void {
    this.authService.signout().subscribe(() =>{
            this.router.navigateByUrl('/')
    })
  }



}
