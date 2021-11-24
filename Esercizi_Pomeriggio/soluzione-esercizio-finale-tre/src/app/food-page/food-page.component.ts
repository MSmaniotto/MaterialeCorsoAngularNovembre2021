import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { FoodProviderService } from '../services/food-provider.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  public food: Food[];
  public error: string = "";
  constructor(private foodProvider: FoodProviderService) { }

  ngOnInit() {
    this.foodProvider.getFood().subscribe({
      next:
        data => {
          this.food = data;
          this.error = "";
        },
      error:
        error => this.error = error
    });
  }

}
