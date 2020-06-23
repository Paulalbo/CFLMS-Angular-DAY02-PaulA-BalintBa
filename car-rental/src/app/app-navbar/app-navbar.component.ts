import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  counter = 0

  onDonateClick() {
    this.counter += 10
    console.log('Counter value: ', this.counter)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
