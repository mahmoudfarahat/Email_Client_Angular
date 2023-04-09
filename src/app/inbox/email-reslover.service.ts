import { EmailService } from './email.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Email } from './email';

@Injectable({
  providedIn: 'root'
})
export class EmailResloverService implements Resolve<Email>{

  constructor(private emailService:EmailService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      const {id} = route.params

      return this.emailService.getEmail(id)
  }

}
