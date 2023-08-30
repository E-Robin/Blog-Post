import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { Subscription } from 'src/app/models/subscription';
import { SubscriptionService } from 'src/app/service/subscription.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isSubscribed:boolean = false;
  isDuplicateEmail = false;
  posts!:any[];

  constructor(private afs:AngularFirestore ,
     private _subscriptionService:SubscriptionService
     ,private _toastService:ToastrService  ){

    this.afs.collection('posts').snapshotChanges().pipe(
      map(res => {
        return res.map(
          a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;

            return {data,id}
          }
        )
      })
    ).subscribe(res => {
      this.posts = res;
      
      console.log(res)
    })

  }

  subscription(subscriber:Subscription){

    this._subscriptionService.checkSubscription(subscriber.email).subscribe(res=>{

      if(res.empty){
        this._subscriptionService.addSubscription(subscriber)
        .then(
          res=>{
            this._toastService.success('Subscription added successfully');
            this.isSubscribed = true
            this.isDuplicateEmail = false
            localStorage.setItem('isSubcribed','true')
          }
         )

      }
      else{
        this.isDuplicateEmail = true

      }
    })
    
   
  }

  

}
