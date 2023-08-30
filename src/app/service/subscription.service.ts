import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from '../models/subscription';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor( private afs:AngularFirestore, private _toastService:ToastrService  ) { }


  addSubscription(subsciber:Subscription){
    return this.afs.collection('subscribers').add(subsciber)
     
  }

}
