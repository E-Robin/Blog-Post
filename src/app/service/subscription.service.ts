import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from '../models/subscription';
import { ToastrService } from 'ngx-toastr';
import { where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor( private afs:AngularFirestore, private _toastService:ToastrService  ) { }


  addSubscription(subsciber:Subscription){
    return this.afs.collection('subscribers').add(subsciber)
     
  }

  checkSubscription(email: string){
    return  this.afs.collection('subscribers',(ref)=>ref.where('email','==',email) ).get()
      
     
  }

}
