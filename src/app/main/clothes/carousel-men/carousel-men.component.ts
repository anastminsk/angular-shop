import { Component, OnInit } from '@angular/core';
import { ClothesItem } from '../clothes.model';
import { ClothesDataService } from '../clothes-data.service';

@Component({
  selector: 'ngbd-carousel-men',
  templateUrl: './carousel-men.component.html',
  styleUrls: ['./carousel-men.component.css']
})

export class NgbdCarouselMen implements OnInit {
  clothesItems: ClothesItem[];
  clothesItemsMen: ClothesItem[];

  images = [1, 2, 3, 4, 5].map(() => `../../assets/img/white-bg.png`);

  constructor(private clothesDataService: ClothesDataService) { }

  ngOnInit() {
    this.clothesItems = this.clothesDataService.getClothes();
    this.clothesItemsMen = this.clothesItems.filter(clothesItem => clothesItem.gender === "men");
  }

  onChange(event) {
    this.clothesItems = event;
    this.clothesItemsMen = this.clothesItems.filter(clothesItem => clothesItem.gender === "men");
  }
}
