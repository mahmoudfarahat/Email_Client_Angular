import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'emailClient';
signedin$ :BehaviorSubject<boolean>

  constructor(private authService:AuthService){
    this.signedin$ = this.authService.signedin$
  }



  ngOnInit(){
    this.authService.checkAuth().subscribe(() =>{})
// this.authService.signedin$.subscribe((signedin) =>{
//   this.signedin= signedin
// })
  }
}
