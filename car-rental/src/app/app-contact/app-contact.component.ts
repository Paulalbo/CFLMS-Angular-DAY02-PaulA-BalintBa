import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.css']
})
export class AppContactComponent implements OnInit {

  contact = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email)
  })

  onSubmit() {
    this.contact.valid && console.log('Submitted', this.contact.value)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
