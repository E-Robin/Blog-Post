import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs:AngularFirestore) { }

  singlePost(id:any){
    return this.afs.collection('posts').doc(id).valueChanges()
  }

  // addPost(data){
  
  // }
}
