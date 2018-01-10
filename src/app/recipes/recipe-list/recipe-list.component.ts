import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is simply a test',
    'http://www.seriouseats.com/images/2017/09/20170919-stir-fry-recipes-roundup-02.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test',
    'http://www.seriouseats.com/images/2017/09/20170919-stir-fry-recipes-roundup-02.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
