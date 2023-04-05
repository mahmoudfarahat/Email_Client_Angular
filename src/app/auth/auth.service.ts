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

interface signupResponse{

}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
rootUrl ='https://api.angular-email.com'
signedin$ = new BehaviorSubject(false);

  constructor(private http:HttpClient) { }



  usernameAvailable(username:string){
    return this.http.post<UsernameAvailavbleResponse>(this.rootUrl+'/auth/username',{username})
  }


  signup(credentials :signupcredentials){
    return this.http.post<signupResponse>(`${this.rootUrl}/auth/signup`,credentials ,{
      withCredentials:true
    }).pipe(
      tap(() =>{
          this.signedin$.next(true)
      })
    )
  }


  checkAuth(){
    return this.http.get(`${this.rootUrl}/auth/signedin`,{
      withCredentials:true
    })
    .pipe(
      tap((response)=>{
        console.log(response)
      })
    )
  }


}
