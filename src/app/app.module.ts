import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthHttpInterceptor } from './auth/auth-http.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HttpClientModule
  ]
  ,
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass:AuthHttpInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
