import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, filter, tap } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

   const modifiedReq = request.clone({
    withCredentials :true
   })

  //  console.log(modifiedReq)

    return next.handle(modifiedReq)
        // .pipe(
        //    filter(value=>value.type ===   HttpEventType.Sent),
        //    tap(value =>{
        //     console.log('Sent the request')
        //     // if(value.type === HttpEventType.Sent){
        //     //   console.log('Request was sent to server')
        //     // }
        //     // if(value.type === HttpEventType.Response){
        //     //   console.log('Got a response form the api' ,value)
        //     // }
        //   })
        // );


  }
}
