import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsConditionComponent } from './pages/terms-condition/terms-condition.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'single-post', component:SinglePostComponent
  },{
    path:'about-us',component:AboutUsComponent 
  },
  {
    path:'terms-condition' , component:TermsConditionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
