import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('pankakor', 'recept för pannkakor', 'http://foodelicious.se/wp-content/gallery/galleri-1/2012-01-02.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
