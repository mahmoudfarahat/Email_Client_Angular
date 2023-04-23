import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailResloverService } from './email-reslover.service';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [

  {path:'',
  component:InboxHomeComponent,
  children:[
    {path:'not-found', component:NotFoundComponent},
    {path:':id',component:EmailShowComponent ,resolve:{email:EmailResloverService} },
    {path:'',component:PlaceholderComponent}


  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
