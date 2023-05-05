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
  username:string
}
interface SignedinResponse {
  authenticated: boolean;
  username:string
}
interface SigninResponse {

  username:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
rootUrl ='https://api.angular-email.com'
signedin$ = new BehaviorSubject<any>(null);
username = ''
  constructor(private http:HttpClient) { }



  usernameAvailable(username:string){
    return this.http.post<UsernameAvailavbleResponse>(this.rootUrl+'/auth/username',{username})
  }


  signup(credentials :signupcredentials){
    return this.http.post<signupResponse>(`${this.rootUrl}/auth/signup`,credentials  ).pipe(
      tap(({username}) =>{
          this.signedin$.next(true)
          this.username =username
      })
    )
  }


  checkAuth(){
    return this.http.get<SignedinResponse>(`${this.rootUrl}/auth/signedin`, )
    .pipe(
      tap(({authenticated,username})=>{
        console.log(authenticated)
        this.signedin$.next(authenticated)
        this.username =username
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
    return this.http.post<SigninResponse>(`${this.rootUrl}/auth/signin`,credentials  ).pipe(
      tap(({username}) =>{
          this.signedin$.next(true)
          this.username =username
      })
    )
  }

}
