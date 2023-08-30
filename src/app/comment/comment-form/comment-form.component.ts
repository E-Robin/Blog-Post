import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/service/post.service';


interface comment {
  name:string;
  comment:string;
}
@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {

  @Output() comment = new EventEmitter<any>

  

  constructor(private afs:AngularFirestore, private _postService:PostService ) {

  }

  submit(formData:comment){
    this.comment.emit(formData)
     

  }
}

