import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import cars from './../../assets/carJson.json';

@Injectable({
  providedIn: 'root',
})
export class CarProviderService {
  constructor() {}

  public getCars(): Car[] {
    return [
      { factory: 'Fiat', name: 'Panda', power: 94, type: 'CityCar' },
      { factory: 'Ford', name: 'Kuga', power: 100, type: 'SUV' },
      { factory: 'Citroen', name: 'Berlingo', power: 90, type: 'Familiare' },
      { factory: 'Volkswagen', name: 'Golf', power: 120, type: 'Berlina' },
      { factory: 'BMW', name: 'Z4', power: 150, type: 'Cabriolet' },
    ];
    //return cars;
  }
}
