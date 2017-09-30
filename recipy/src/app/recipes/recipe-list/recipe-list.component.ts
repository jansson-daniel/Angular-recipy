import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('pankakor', 'recept för pannkakor', 'http://foodelicious.se/wp-content/gallery/galleri-1/2012-01-02.jpg'),
    new Recipe('rårakor', 'recept för rårakor', 'http://www.spisa.nu/recipeImages/ri_1639_3.jpg')
  ];

  constructor() { }

  onRecipeSelected (recipe: Recipe) {
    console.log(recipe)
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit() {
  }

}
