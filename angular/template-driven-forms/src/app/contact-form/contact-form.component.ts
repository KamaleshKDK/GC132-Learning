import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [{
    id: 1, name: "Email"
  }, {
    id: 2, name: "Phone No"
  }]
  log(x: any) {
    console.log(x);
  }

  submit(f: any) {
    console.log(f);
  }

  // onSubmit(f:NgForm){
  //   console.log(f.value);
  //   console.log(f.valid);
  // }
}
