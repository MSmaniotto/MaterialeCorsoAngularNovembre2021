import { Component } from '@angular/core';
import { CarProviderService } from './services/car-provider.service';
import { Car } from './models/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private carsProvider: CarProviderService){}

  ngOnInit(): void {
    this.carList=this.carsProvider.getCars();
  }

  title = 'app';
  public carList:Car[]=[];
}
