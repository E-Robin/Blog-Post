import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { comment } from 'src/app/models/comment';
import { Post, singlePost } from 'src/app/models/post';
import { Subscription } from 'src/app/models/subscription';
import { PostService } from 'src/app/service/post.service';
import { SubscriptionService } from 'src/app/service/subscription.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {

  isDuplicateEmail:boolean = false
  isSubscribed:boolean  = false
  singlePost!: any ;
  
  constructor(private _activatedRoute:ActivatedRoute,
      private _postService:PostService,
      private _subscriptionService:SubscriptionService,
      private _toastService:ToastrService 
    ){
    this._activatedRoute.queryParams.subscribe(
      res =>{
        // res['get']('id')
        const id = res['id']
        console.log(res['id'])
        this._postService.singlePost(id).subscribe(res => {
          console.log(res)
          const result = res
          
          this.singlePost = result
        })

      }
    )

  }

  addComment(formdata:any){
    console.log(formdata)


  }

  // subscription(subscriber:Subscription){
  //   this._subscriptionService.addSubscription(subscriber)
  //   .then(
  //     res=>{
  //       this._toastService.success('Subscription added successfully');
  //       this.isSubscribed = true
  //     }
  //    )
  // }
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
