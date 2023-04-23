import { EmailService } from './email.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Email } from './email';
import { EMPTY, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailResloverService implements Resolve<Email>{

  constructor(private emailService:EmailService , private router:Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      const {id} = route.params

      return this.emailService.getEmail(id).pipe(
        catchError(()=>{
            this.router.navigateByUrl('/inbox/not-found')
            return EMPTY
        })
      )
  }

}
