import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredients} from "../ingredients";

@Injectable()
export class RecpieService {
private   recipes: Recipe[] = [
  new Recipe('Schnitzel', 'Very tasty', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
    new Ingredients('French Fries', 2),
    new Ingredients('Pork Meat',1)
  ]),

  new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [

  ])
];
  constructor() { }
  getRecipes(){
    return this.recipes;
  }
}
