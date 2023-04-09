import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

interface UsernameAvailavbleResponse
{
  available:boolean
}

interface signupcredentials{
username:string
password:string
passwordConfirmation:string
}
interface signInCredentials{
  username:string
password:string
}
interface signupResponse{

}
interface SignedinResponse {
  authenticated: boolean;
  username:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
rootUrl ='https://api.angular-email.com'
signedin$ = new BehaviorSubject<any>(null);

  constructor(private http:HttpClient) { }



  usernameAvailable(username:string){
    return this.http.post<UsernameAvailavbleResponse>(this.rootUrl+'/auth/username',{username})
  }


  signup(credentials :signupcredentials){
    return this.http.post<signupResponse>(`${this.rootUrl}/auth/signup`,credentials  ).pipe(
      tap(() =>{
          this.signedin$.next(true)
      })
    )
  }


  checkAuth(){
    return this.http.get<SignedinResponse>(`${this.rootUrl}/auth/signedin`, )
    .pipe(
      tap(({authenticated})=>{
        console.log(authenticated)
        this.signedin$.next(authenticated)
      })
    )
  }

  signout(){
    return this.http.post(`${this.rootUrl}/auth/signout`,{} )
        .pipe(
          tap(()=>{
            this.signedin$.next(false)
          })
        )
  }

  sigin(credentials:signInCredentials){
    return this.http.post(`${this.rootUrl}/auth/signin`,credentials  ).pipe(
      tap(() =>{
          this.signedin$.next(true)
      })
    )
  }

}
