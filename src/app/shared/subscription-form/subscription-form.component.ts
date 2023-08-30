import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent {


  
  @Input() isSubscribed:boolean = false;
  @Output() subscriptionData = new EventEmitter<any>
  @ViewChild('subscriptionForm')
  form!: NgForm;
  constructor(){

  }
  submit(formData:any){

    const subscriptionData = {
      name:formData.name,
      email:formData.email
    }
    this.subscriptionData.emit(subscriptionData)
    
    


  }

}
