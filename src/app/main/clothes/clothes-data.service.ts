import { Injectable } from '@angular/core';
import { CLOTHES } from './mocks';

@Injectable({
  providedIn: 'root'
})

export class ClothesDataService {

  constructor() { }

  getClothes() {
    return CLOTHES;
  }
}
