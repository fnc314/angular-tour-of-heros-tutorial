import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Import Hero Class
import { Hero } from './../hero';
import { HeroService } from './../hero.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heros: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
    this.heroService = heroService;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeroes()
      .subscribe(heros => (this.heros = heros));
  }
}
