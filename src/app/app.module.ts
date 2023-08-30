import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FirestoreModule} from '@angular/fire/firestore';

import {AngularFireModule} from '@angular/fire/compat';
// import {AngularFirestoreModule} from '@angular/fire/compat/firestore/firestore.module';

import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CategoryNavbarComponent } from './shared/category-navbar/category-navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SubscriptionFormComponent } from './shared/subscription-form/subscription-form.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentFormComponent } from './comment/comment-form/comment-form.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsConditionComponent } from './pages/terms-condition/terms-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PostCardComponent } from './shared/post-card/post-card.component';
import { env } from 'environment.prod';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    SubscriptionFormComponent,
    CommentListComponent,
    CommentFormComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsConditionComponent,
    ContactUsComponent,
    AboutUsComponent,
    PostCardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    // AngularFirestoreModule,
    FirestoreModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
