import { Component, OnInit } from '@angular/core';

// Import Hero Class
import { Hero } from './../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  hero: Hero = {
    name: 'Windstrom',
    id: new Date().getTime()
  };
  secondHero: Hero = {
    name: 'BLAH',
    id: new Date().getTime(),
    test: () => console.log('this.secondHero')
  };
  constructor() {

  }

  ngOnInit() {
  }

}
