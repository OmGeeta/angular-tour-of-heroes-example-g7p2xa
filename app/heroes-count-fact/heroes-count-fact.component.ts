import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-count-fact',
  templateUrl: './heroes-count-fact.component.html',
  styleUrls: ['./heroes-count-fact.component.css']
})
export class HeroesCountFactComponent implements OnInit {

  heroes: Hero[] = [];
  herocount:number;
  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void { 
    this.heroService.getHeroes()
        .then(heroes => {
          this.heroes = heroes;
          this.heroService.heroCount.subscribe(count => this.herocount = count)
        });
  }

  // program to find the factorial of a number
 factorial(x) {

  // if number is 0
  if (x == 0) {
      return 1;
  }

  // if number is positive
  else {
      return x * this.factorial(x - 1);
  }
}


}

