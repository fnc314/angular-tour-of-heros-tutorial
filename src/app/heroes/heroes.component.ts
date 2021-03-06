import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Import Hero Class
import { Hero } from './../hero';
import { HeroService } from './../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

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
