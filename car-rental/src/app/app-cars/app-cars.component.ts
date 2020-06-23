import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cars',
  templateUrl: './app-cars.component.html',
  styleUrls: ['./app-cars.component.css']
})
export class AppCarsComponent implements OnInit {

  cars = [
    {
      brand: 'Tesla',
      model: 'S',
      img: '../../assets/img/models.png'
    },
    {
      brand: 'Tesla',
      model: 'S',
      img: '../../assets/img/models.png'
    },
    {
      brand: 'Tesla',
      model: 'S',
      img: '../../assets/img/models.png'
    },
    {
      brand: 'Tesla',
      model: 'S',
      img: '../../assets/img/models.png'
    },
    {
      brand: 'Tesla',
      model: 'S',
      img: '../../assets/img/models.png'
    },
    {
      brand: 'Tesla',
      model: 'S',
      img: '../../assets/img/models.png'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
